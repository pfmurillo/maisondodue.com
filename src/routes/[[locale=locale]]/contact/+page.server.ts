import type { Actions, PageServerLoad } from './$types';

import { fail } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactSchema } from '$lib/schemas/contact.js';
import { Resend } from 'resend';
import { RESEND_API_KEY, RESEND_FROM_ID, RESEND_TO_ID } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(contactSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		const text = `prénom : nom : email : téléphone : message :`;

		const resend = new Resend(RESEND_API_KEY);
		(async function () {
			const { error } = await resend.emails.send({
				from: RESEND_FROM_ID,
				to: [RESEND_TO_ID],
				subject: 'Nouveau message pour Maison Dodue',
				text
			});
			if (error) {
				return fail(500, { form, error });
			}
		})();
		return message(form, 'message_sent');
	}
};
