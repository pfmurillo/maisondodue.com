import { z } from 'zod';

export const contactSchema = z.object({
	firstName: z.string().trim().min(1).max(50),
	lastName: z.string().trim().min(1).max(50),
	email: z.string().email(),
	phone: z.string(),
	message: z.string().trim().min(1).max(500)
});
