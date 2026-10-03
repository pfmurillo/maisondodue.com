import { IMAGE_TYPES } from '$lib/schemas';

const MAX_DIMENSION = 1280;
const JPEG_QUALITY = 0.82;

/**
 * Réduit une photo avant l'envoi (les photos de téléphone font souvent plusieurs Mo).
 * Renvoie le fichier d'origine si l'image ne peut pas être lue ou si la réduction n'apporte rien.
 */
export async function compressImage(file: File): Promise<File> {
	if (!IMAGE_TYPES.includes(file.type)) return file;
	try {
		const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
		const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));
		const canvas = document.createElement('canvas');
		canvas.width = Math.round(bitmap.width * scale);
		canvas.height = Math.round(bitmap.height * scale);
		const ctx = canvas.getContext('2d');
		if (!ctx) return file;
		// Fond blanc pour les PNG transparents convertis en JPEG.
		ctx.fillStyle = '#fff';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
		bitmap.close();
		const blob = await new Promise<Blob | null>((resolve) =>
			canvas.toBlob(resolve, 'image/jpeg', JPEG_QUALITY)
		);
		if (!blob || blob.size >= file.size) return file;
		const name = file.name.replace(/\.[^.]+$/, '') + '.jpg';
		return new File([blob], name, { type: 'image/jpeg', lastModified: file.lastModified });
	} catch {
		return file;
	}
}
