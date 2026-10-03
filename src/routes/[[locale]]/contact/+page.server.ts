import { message, superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { contactSchema } from '$lib/schemas.js';
import { MAILER_USER, MAILER_PASS, MAILER_HOST } from '$env/static/private';
import NodeMailer from 'nodemailer';

// Les champs saisis sont insérés dans le HTML de l'email : on les échappe.
function escapeHtml(text: string) {
	return text
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;')
		.replaceAll('\n', '<br />');
}

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

			const { firstname, lastname, email, phone, title, message: description } = form.data;
			const html =
				`<b>Prénom</b> : ${escapeHtml(firstname)} <br />` +
				`<b>Nom</b> : ${escapeHtml(lastname)} <br />` +
				`<b>Email</b> : ${escapeHtml(email)} <br />` +
				`<b>Téléphone</b> : ${escapeHtml(phone)} <br />` +
				`<b>Projet</b> : ${escapeHtml(title)} <br />` +
				`<b>Description</b> : ${escapeHtml(description)} <br />`;

			await transporter.sendMail({
				from: MAILER_USER,
				to: MAILER_USER,
				replyTo: {
					name: `${form.data.firstname} ${form.data.lastname}`,
					address: form.data.email
				},
				subject: title,
				html,
				attachments
			});
			return message(form, 'sent');
		} catch (error) {
			console.error(error);
			return message(form, 'error', { status: 500 });
		}
	}
};
