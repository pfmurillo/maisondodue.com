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

	let disabled = $state(true);
	const { contactForm }: { contactForm: SuperValidated<Infer<ContactSchema>> } = $props();
	const { form, errors, enhance, validateForm } = superForm(contactForm, {
		validators: zod(contactSchema),
		async onChange() {
			disabled = !(await validateForm()).valid;
		}
	});
	const files = filesProxy(form, 'images');

	let fileInput: HTMLElement;

	function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<footer class="bg-brown-500 p-3 pt-12 text-white">
	<div class="min-w-1600 m-auto my-12 w-fit">
		<h2 class="mb-8 text-4xl">{m.known_flat_coyote_walk()}</h2>
		<form method="POST" enctype="multipart/form-data" action="/contact" use:enhance>
			<label for="firstname" class="mt-3 block">{m.glad_awful_cat_laugh()}</label>
			<input
				type="text"
				name="firstname"
				class="block text-black"
				class:bg-red-300={$errors.firstname}
				bind:value={$form.firstname}
				aria-invalid={$errors.firstname ? 'true' : undefined}
			/>
			<label for="lastname" class="mt-3 block">{m.round_pretty_lion_swim()}</label>
			<input
				type="text"
				name="lastname"
				class="block text-black"
				class:bg-red-300={$errors.lastname}
				bind:value={$form.lastname}
				aria-invalid={$errors.lastname ? 'true' : undefined}
			/>
			<label for="email" class="mt-3 block">{m.vivid_blue_bumblebee_succeed()}</label>
			<input
				type="email"
				name="email"
				class="block text-black"
				class:bg-red-300={$errors.email}
				bind:value={$form.email}
				aria-invalid={$errors.email ? 'true' : undefined}
			/>
			<label for="phone" class="mt-3 block">{m.salty_green_robin_amaze()}</label>
			<input
				type="text"
				name="phone"
				class="block text-black"
				class:bg-red-300={$errors.phone}
				bind:value={$form.phone}
				aria-invalid={$errors.phone ? 'true' : undefined}
			/>
			<label for="message" class="mt-3 block">{m.odd_sweet_fireant_grace()}</label>
			<textarea
				name="message"
				class:bg-red-300={$errors.message}
				class="block text-black"
				bind:value={$form.message}
				aria-invalid={$errors.message ? 'true' : undefined}
			></textarea>
			<label for="images" class="mt-3 block">Vos images (3 max.)</label>
			<div class="flex">
				{#each $form.images as image}
					<img
						src={URL.createObjectURL(image)}
						alt={image.name}
						class="block aspect-square h-40 object-cover"
					/>
				{:else}
					aucune image
				{/each}
			</div>
			<button
				onclick={(e) => {
					e.preventDefault();
					fileInput.click();
				}}
				class="flex w-fit items-center justify-center bg-slate-200 p-2 font-bold text-black"
				>selectionner des images</button
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
				class="mt-6 w-full bg-slate-200 p-3 font-bold text-black disabled:opacity-50"
				{disabled}>{m.mellow_fine_mink_pout()}</button
			>
		</form>
	</div>
	<div class="m-auto mb-12 w-fit text-center font-bold">
		<span class="max-sm:block">2023-2025 Maison Dodue</span>
		<span class="max-sm:block">Paris 18e</span>
		<span class="max-sm:block"><a href="/mentions">{m.aqua_gray_penguin_peek()}</a></span>
		<span class="max-sm:block">
			{#if languageTag() === 'fr'}
				<button onclick={() => switchToLanguage('en')}>english version</button>
			{:else}
				<button onclick={() => switchToLanguage('fr')}>version française</button>
			{/if}
		</span>
	</div>
</footer>
