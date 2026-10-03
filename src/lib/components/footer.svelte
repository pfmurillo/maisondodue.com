<script lang="ts">
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import { contactSchema, MAX_IMAGES, type ContactMessage, type ContactSchema } from '$lib/schemas';
	import { compressImage } from '$lib/image';
	import { languageTag, type AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { superForm, filesProxy } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';

	const { contactForm }: { contactForm: SuperValidated<Infer<ContactSchema>, ContactMessage> } =
		$props();
	const { form, errors, enhance, submitting, message, validateForm } = superForm(contactForm, {
		validators: zod(contactSchema),
		scrollToError: 'smooth',
		// Erreur réseau ou serveur (ex. requête trop lourde refusée par l'hébergeur).
		onError: () => {
			$message = 'error';
		}
	});
	const files = filesProxy(form, 'images');

	let fileInput: HTMLInputElement | undefined = $state();
	let preparingImages = $state(false);
	let previews: string[] = $state([]);

	$effect(() => {
		const urls = $form.images.map((image) => URL.createObjectURL(image));
		previews = urls;
		return () => urls.forEach((url) => URL.revokeObjectURL(url));
	});

	const imageErrorMessages: Record<string, () => string> = {
		image_type: m.contact_image_type,
		images_max: m.contact_images_max,
		images_total: m.contact_images_total
	};

	function imageError(code: string) {
		return imageErrorMessages[code]?.() ?? m.broad_patient_myna_win();
	}

	// Valide uniquement les images, sans afficher d'erreurs sur les champs pas encore remplis.
	async function validateImages() {
		const result = await validateForm();
		$errors.images = result.errors.images;
	}

	async function addImages() {
		if (!fileInput) return;
		const picked = Array.from(fileInput.files ?? []);
		fileInput.value = '';
		if (!picked.length) return;
		preparingImages = true;
		try {
			const prepared = await Promise.all(picked.map(compressImage));
			$form.images = [...$form.images, ...prepared];
		} finally {
			preparingImages = false;
		}
		await validateImages();
	}

	async function removeImage(index: number) {
		$form.images = $form.images.filter((_, i) => i !== index);
		await validateImages();
	}

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<footer class="bg-[#cce5f8] p-3 pt-12 text-sky-500">
	<div class="my-12 grid w-full grid-cols-1 justify-items-center gap-12 md:grid-cols-2">
		<div>
			<h2 class="mb-8 text-4xl">{m.known_flat_coyote_walk()}</h2>
			{#if $message === 'sent'}
				<p>{m.inner_bold_niklas_rise()}</p>
			{:else}
				<p>{m.major_kind_marten_find()}</p>
				<form
					class="w-lg mb-16 block max-w-96"
					method="POST"
					enctype="multipart/form-data"
					action="/contact"
					use:enhance
				>
					<label for="firstname" class="mt-4 block w-full"
						>{m.glad_awful_cat_laugh()}<span class="ml-1 text-sm">*</span></label
					>
					<input
						type="text"
						name="firstname"
						class="block w-full rounded-2xl border px-4 py-2"
						class:bg-red-300={$errors.firstname}
						bind:value={$form.firstname}
						aria-invalid={$errors.firstname ? 'true' : undefined}
					/>
					<label for="lastname" class="mt-4 block"
						>{m.round_pretty_lion_swim()}<span class="ml-1 text-sm">*</span></label
					>
					<input
						type="text"
						name="lastname"
						class="block w-full rounded-2xl border px-4 py-2"
						class:bg-red-300={$errors.lastname}
						bind:value={$form.lastname}
						aria-invalid={$errors.lastname ? 'true' : undefined}
					/>
					<label for="email" class="mt-4 block"
						>{m.vivid_blue_bumblebee_succeed()}<span class="ml-1 text-sm">*</span></label
					>
					<input
						type="email"
						name="email"
						class="block w-full rounded-2xl border px-4 py-2"
						class:bg-red-300={$errors.email}
						bind:value={$form.email}
						aria-invalid={$errors.email ? 'true' : undefined}
					/>
					<label for="phone" class="mt-4 block">{m.salty_green_robin_amaze()}</label>
					<input
						type="text"
						name="phone"
						class="block w-full rounded-2xl border px-4 py-2"
						bind:value={$form.phone}
					/>
					<label for="title" class="mt-4 block"
						>{m.contact_project_title()}<span class="ml-1 text-sm">*</span></label
					>
					<input
						type="text"
						name="title"
						maxlength="150"
						class="block w-full rounded-2xl border px-4 py-2"
						class:bg-red-300={$errors.title}
						bind:value={$form.title}
						aria-invalid={$errors.title ? 'true' : undefined}
					/>
					<label for="message" class="mt-4 block"
						>{m.odd_sweet_fireant_grace()}<span class="ml-1 text-sm">*</span></label
					>
					<textarea
						name="message"
						class:bg-red-300={$errors.message}
						class="block min-h-36 w-full rounded-2xl border px-4 py-2"
						bind:value={$form.message}
						aria-invalid={$errors.message ? 'true' : undefined}
					></textarea>
					<label for="images" class="mt-4 block">{m.contact_images_label()}</label>
					{#if $errors.images?._errors}
						<p class="mt-1 rounded-2xl bg-red-300 px-4 py-2 text-sm" role="alert">
							{imageError($errors.images._errors[0])}
						</p>
					{/if}
					<div class="grid grid-cols-3 gap-2">
						{#each $form.images as image, i (image)}
							<div class="relative my-2">
								<img
									src={previews[i]}
									alt={image.name}
									class="aspect-square w-full rounded-2xl object-cover"
									class:ring-4={$errors.images?.[i]}
									class:ring-red-400={$errors.images?.[i]}
								/>
								<button
									type="button"
									onclick={() => removeImage(i)}
									class="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg leading-none shadow"
									aria-label={m.contact_image_remove({ name: image.name })}>×</button
								>
								{#if $errors.images?.[i]}
									<p class="mt-1 text-xs text-red-600">{imageError($errors.images[i][0])}</p>
								{/if}
							</div>
						{/each}
					</div>
					{#if $form.images.length < MAX_IMAGES}
						<button
							type="button"
							disabled={preparingImages}
							onclick={() => fileInput?.click()}
							class="flex w-full items-center justify-center rounded-2xl border bg-white py-3"
							class:opacity-50={preparingImages}
						>
							{preparingImages ? m.contact_images_preparing() : m.tasty_many_ladybug_learn()}
						</button>
					{/if}
					<input
						type="file"
						class="hidden"
						multiple
						accept="image/png, image/jpeg"
						bind:this={fileInput}
						onchange={addImages}
					/>
					<input type="file" class="hidden" multiple name="images" bind:files={$files} />
					{#if $message === 'error'}
						<p class="mt-6 rounded-2xl bg-red-300 px-4 py-2 text-sm" role="alert">
							{m.contact_send_error()}
						</p>
					{/if}
					<button
						disabled={$submitting || preparingImages}
						class:opacity-50={$submitting || preparingImages}
						class="mt-6 w-full rounded-2xl bg-white p-3"
					>
						{#if $submitting}
							{m.knotty_still_earthworm_trust()}
						{:else}
							{m.mellow_fine_mink_pout()}
						{/if}
					</button>
					<div class="mt-8 max-w-[400px] text-sm">
						{m.spry_stock_newt_link()}
					</div>
				</form>
			{/if}
		</div>
		<!-- md:pt : hauteur du titre « Contactez-moi » (2,5rem) + sa marge (2rem), moins l'écart
		     d'interligne (0,25rem), pour s'aligner sur la première ligne de la colonne de gauche -->
		<div class="leading-8 md:pt-[4.25rem]">
			<p class="mb-4 whitespace-pre-line">{m.footer_workshop_address()}</p>
			<p class="mb-4">{m.footer_by_appointment()}</p>
			<p>{m.footer_by_email()}</p>
			<p class="mb-4">
				<a class="underline" href="mailto:contact@maisondodue.com">contact@maisondodue.com</a>
			</p>
			<p>
				{m.footer_by_phone()}
				<a class="underline" href="tel:+33782732526">0782732526</a>
			</p>
			<p>{m.footer_opening_hours()}</p>
		</div>
	</div>
	<div class="m-auto mb-12 mt-12 w-fit text-center">
		<span class="px-2 md:after:pl-4 md:after:content-['•'] md:max-sm:block"
			>2023-2026 Maison Dodue</span
		><span class="px-2 max-sm:block md:after:pl-4 md:after:content-['•']"
			>Paris 18ème | Saint-Ouen</span
		><span class="px-2 max-sm:block md:after:pl-4 md:after:content-['•']"
			><a class="underline" target="_blank" href="https://www.linkedin.com/company/maison-dodue"
				>LinkedIn</a
			></span
		><span class="px-2 max-sm:block md:after:pl-4 md:after:content-['•']"
			><a class="underline" href="/mentions">{m.aqua_gray_penguin_peek()}</a></span
		><span class="px-2 max-sm:block">
			{#if languageTag() === 'fr'}
				<button class="underline" onclick={() => switchToLanguage('en')}>English version</button>
			{:else}
				<button class="underline" onclick={() => switchToLanguage('fr')}>Version française</button>
			{/if}
		</span>
	</div>
</footer>
