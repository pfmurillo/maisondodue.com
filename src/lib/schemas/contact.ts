import { z } from 'zod';

export const contactSchema = z.object({
	firstName: z.string().trim().min(1),
	lastName: z.string().trim().min(1),
	email: z.string().email(),
	phone: z.string(),
	message: z.string().trim().min(1)
});
