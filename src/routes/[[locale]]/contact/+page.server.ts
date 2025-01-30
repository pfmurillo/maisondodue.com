import { message, superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { contactSchema } from '$lib/schemas.js';
import { Resend } from 'resend';
import { RESEND_API_KEY, RESEND_FROM, RESEND_TO, RESEND_SUBJECT } from '$env/static/private';

interface Attachment {
	content: string;
	filename: string;
}

async function setAttachments(images: File[]) {
	const attachments: Attachment[] = [];
	for (const image of images) {
		attachments.push({
			content: Buffer.from(await image.arrayBuffer()).toString('base64'),
			filename: image.name
		});
	}
	return attachments;
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));
		if (!form.valid) return fail(400, withFiles({ form }));
		try {
			const attachments = await setAttachments(form.data.images);
			const html =
				`<b>Prénom</b> : ${form.data.firstname} <br />` +
				`<b>Nom</b> : ${form.data.lastname} <br />` +
				`<b>Email</b> : ${form.data.email} <br />` +
				`<b>Téléphone</b> : ${form.data.phone} <br />` +
				`<b>Message</b> : ${form.data.message} <br />`;

			const resend = new Resend(RESEND_API_KEY);
			await resend.emails.send({
				from: RESEND_FROM,
				to: RESEND_TO,
				subject: RESEND_SUBJECT,
				html,
				attachments
			});
			return message(form, 'Your message has been sent');
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}
	}
};
