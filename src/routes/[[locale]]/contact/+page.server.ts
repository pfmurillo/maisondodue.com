import { message, superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { contactSchema } from '$lib/schemas.js';
import { MAILER_USER, MAILER_PASS, MAILER_HOST, MAILER_SUBJECT } from '$env/static/private';
import NodeMailer from 'nodemailer';

interface Attachment {
	content: string;
	encoding: string;
	filename: string;
	type: string;
}

async function setAttachments(images: File[]) {
	const attachments: Attachment[] = [];
	for (const image of images) {
		attachments.push({
			content: Buffer.from(await image.arrayBuffer()).toString('base64'),
			encoding: 'base64',
			filename: image.name,
			type: image.type
		});
	}
	return attachments;
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));
		if (!form.valid) return fail(400, withFiles({ form }));
		try {
			const transporter = NodeMailer.createTransport({
				host: MAILER_HOST,
				port: 587,
				secure: false,
				auth: {
					user: MAILER_USER,
					pass: MAILER_PASS
				}
			});

			const attachments = await setAttachments(form.data.images);

			const html =
				`<b>Prénom</b> : ${form.data.firstname} <br />` +
				`<b>Nom</b> : ${form.data.lastname} <br />` +
				`<b>Email</b> : ${form.data.email} <br />` +
				`<b>Téléphone</b> : ${form.data.phone} <br />` +
				`<b>Message</b> : ${form.data.message} <br />`;

			await transporter.sendMail({
				from: MAILER_USER,
				to: MAILER_USER,
				subject: MAILER_SUBJECT,
				html,
				attachments
			});
			return message(form, 'Message sent');
		} catch (error) {
			console.log(error);
			return fail(400, { form });
		}
	}
};
