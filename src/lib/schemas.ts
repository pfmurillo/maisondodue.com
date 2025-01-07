import { z } from 'zod';

export const contactSchema = z.object({
	firstname: z.string().min(1),
	lastname: z.string().min(1),
	email: z.string().email(),
	phone: z.string().min(1),
	message: z.string().min(1).max(500),
	images: z
		.instanceof(File, { message: 'Please upload a file.' })
		.refine((f) => f.size < 100_000, 'Max 100 kB upload size.')
		.array()
		.max(3)
});

export type ContactSchema = typeof contactSchema;
