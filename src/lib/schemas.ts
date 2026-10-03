import { z } from 'zod';

export const IMAGE_TYPES = ['image/jpeg', 'image/png'];
export const MAX_IMAGES = 10;
// Vercel refuse les requêtes de plus de 4,5 Mo : on garde de la marge pour le reste du formulaire.
export const MAX_IMAGES_TOTAL_SIZE = 4_000_000;

// Les messages d'erreur sont des codes, traduits à l'affichage.
export const contactSchema = z.object({
	firstname: z.string().min(1),
	lastname: z.string().min(1),
	email: z.string().email(),
	phone: z.string(),
	title: z.string().trim().min(1).max(150),
	message: z.string().min(1).max(500),
	images: z
		.instanceof(File, { message: 'image_type' })
		.refine((f) => IMAGE_TYPES.includes(f.type), 'image_type')
		.array()
		.max(MAX_IMAGES, 'images_max')
		.refine(
			(files) => files.reduce((total, f) => total + f.size, 0) <= MAX_IMAGES_TOTAL_SIZE,
			'images_total'
		)
});

export type ContactSchema = typeof contactSchema;
export type ContactMessage = 'sent' | 'error';
