<script lang="ts">
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import { contactSchema, type ContactSchema } from '$lib/schemas';
	import { languageTag, type AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { superForm, filesProxy } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';

	const { contactForm }: { contactForm: SuperValidated<Infer<ContactSchema>> } = $props();
	const { form, errors, enhance, submitting, message } = superForm(contactForm, {
		validators: zod(contactSchema),
		scrollToError: 'smooth'
	});
	const files = filesProxy(form, 'images');

	let fileInput: HTMLElement;

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<footer class="bg-curry-500 p-3 pt-12 text-white">
	<div class="min-w-1600 m-auto my-12 w-fit">
		<h2 class="mb-8 text-4xl">{m.known_flat_coyote_walk()}</h2>
		{#if $message}
			<p>{m.inner_bold_niklas_rise()}</p>
		{:else}
			<p>{m.major_kind_marten_find()}</p>
			<form class="mb-16" method="POST" enctype="multipart/form-data" action="/contact" use:enhance>
				<label for="firstname" class="mt-4 block"
					>{m.glad_awful_cat_laugh()}<span class="ml-1 text-sm">*</span></label
				>
				<input
					type="text"
					name="firstname"
					class="block w-full rounded-2xl border px-4 py-2 text-black"
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
					class="block w-full rounded-2xl border px-4 py-2 text-black"
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
					class="block w-full rounded-2xl border px-4 py-2 text-black"
					class:bg-red-300={$errors.email}
					bind:value={$form.email}
					aria-invalid={$errors.email ? 'true' : undefined}
				/>
				<label for="phone" class="mt-4 block">{m.salty_green_robin_amaze()}</label>
				<input
					type="text"
					name="phone"
					class="block w-full rounded-2xl border px-4 py-2 text-black"
					bind:value={$form.phone}
				/>
				<label for="message" class="mt-4 block"
					>{m.odd_sweet_fireant_grace()}<span class="ml-1 text-sm">*</span></label
				>
				<textarea
					name="message"
					class:bg-red-300={$errors.message}
					class="block min-h-36 w-full rounded-2xl border px-4 py-2 text-black"
					bind:value={$form.message}
					aria-invalid={$errors.message ? 'true' : undefined}
				></textarea>
				<label for="images" class:bg-red-300={$errors.images} class="mt-4 block"
					>Images (3 max, .jpg ou .png, 1 Mo max)</label
				>
				{#if $errors.images}
					<p>{m.broad_patient_myna_win()}</p>
				{/if}
				<div class="flex">
					{#each $form.images as image}
						<img
							src={URL.createObjectURL(image)}
							alt={image.name}
							class="my-4 block aspect-square h-40 max-w-[33%] object-cover"
						/>
					{/each}
				</div>
				<button
					onclick={(e) => {
						e.preventDefault();
						fileInput.click();
					}}
					class="flex w-full items-center justify-center rounded-2xl border bg-white py-3 text-black"
					>{m.tasty_many_ladybug_learn()}</button
				>
				<input
					type="file"
					class="hidden"
					multiple
					name="images"
					accept="image/png, image/jpeg"
					bind:this={fileInput}
					bind:files={$files}
				/>
				<button
					disabled={$submitting}
					class:opacity-50={$submitting}
					class="mt-6 w-full rounded-2xl bg-white p-3 text-black"
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
	<div class="m-auto mb-12 mt-12 w-fit text-center">
		<span class="px-2 md:after:pl-4 md:after:content-['•'] md:max-sm:block"
			>2023-2025 Maison Dodue</span
		><span class="px-2 max-sm:block md:after:pl-4 md:after:content-['•']"
			>Paris 18ème | Saint-Ouen</span
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
