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

<footer class="bg-brownie-500 p-3 pt-12 text-white">
	<div class="min-w-1600 m-auto my-12 w-fit">
		<h2 class="mb-8 text-5xl">{m.known_flat_coyote_walk()}</h2>
		<form class="mb-16" method="POST" enctype="multipart/form-data" action="/contact" use:enhance>
			<label for="firstname" class="mt-4 block text-lg font-bold"
				>{m.glad_awful_cat_laugh()}<span class="ml-1 text-sm font-bold">*</span></label
			>
			<input
				type="text"
				name="firstname"
				class="block w-full border bg-brownie-500 px-4 py-2 text-xl text-white"
				class:bg-red-300={$errors.firstname}
				bind:value={$form.firstname}
				aria-invalid={$errors.firstname ? 'true' : undefined}
			/>
			<label for="lastname" class="mt-4 block text-lg font-bold"
				>{m.round_pretty_lion_swim()}<span class="ml-1 text-sm font-bold">*</span></label
			>
			<input
				type="text"
				name="lastname"
				class="block w-full border bg-brownie-500 px-4 py-2 text-xl text-white"
				class:bg-red-300={$errors.lastname}
				bind:value={$form.lastname}
				aria-invalid={$errors.lastname ? 'true' : undefined}
			/>
			<label for="email" class="mt-4 block text-lg font-bold"
				>{m.vivid_blue_bumblebee_succeed()}<span class="ml-1 text-sm font-bold">*</span></label
			>
			<input
				type="email"
				name="email"
				class="block w-full border bg-brownie-500 px-4 py-2 text-xl text-white"
				class:bg-red-300={$errors.email}
				bind:value={$form.email}
				aria-invalid={$errors.email ? 'true' : undefined}
			/>
			<label for="phone" class="mt-4 block text-lg font-bold"
				>{m.salty_green_robin_amaze()}<span class="ml-1 text-sm font-bold">*</span></label
			>
			<input
				type="text"
				name="phone"
				class="block w-full border bg-brownie-500 px-4 py-2 text-xl text-white"
				class:bg-red-300={$errors.phone}
				bind:value={$form.phone}
				aria-invalid={$errors.phone ? 'true' : undefined}
			/>
			<label for="message" class="mt-4 block text-lg font-bold"
				>{m.odd_sweet_fireant_grace()}<span class="ml-1 text-sm font-bold">*</span></label
			>
			<textarea
				name="message"
				class:bg-red-300={$errors.message}
				class="block min-h-36 w-full border bg-brownie-500 px-4 py-2 text-xl text-white"
				bind:value={$form.message}
				aria-invalid={$errors.message ? 'true' : undefined}
			></textarea>
			<label for="images" class="mt-4 block text-lg font-bold">Images (3 max.)</label>
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
				class="flex w-full items-center justify-center border bg-brownie-500 py-3 text-lg font-bold text-white"
				>Sélectionner des images</button
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
				class="mt-6 w-full bg-slate-200 p-3 text-lg font-bold text-black disabled:opacity-25"
				{disabled}>{m.mellow_fine_mink_pout()}</button
			>
			<div class="mt-8 max-w-[400px] text-sm">
				Conformément aux articles 38 et 40 de la loi 2004-801 du 06/08/2004, vous disposez d'un
				droit d'accés, de rectification, de suppression des données vous concernant. Ce droit peut
				s'exercer en adressant un courrier l'adresse suivante : Maison Dodue 4 rue Jean Varenne
				75018 Paris
			</div>
		</form>
	</div>
	<div class="m-auto mb-12 mt-12 w-fit text-center font-bold">
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
