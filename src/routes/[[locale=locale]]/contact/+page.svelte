<script lang="ts">
	import { _ } from '$lib/i18n';
	import { superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { contactSchema } from '$lib/schemas/contact.js';
	import { draw, slide } from 'svelte/transition';

	export let data;

	const { form, message, errors, enhance } = superForm(data.form, {
		validators: zod(contactSchema)
	});
</script>

<h1>{$_('contact.h1')}</h1>

<p>{$_('contact.p1')}</p>
<form method="POST" use:enhance>
	<label for="firstName">Prénom (requis)</label>
	<input
		name="firstName"
		type="text"
		bind:value={$form.firstName}
		aria-invalid={$errors.firstName ? 'true' : undefined}
		class:error={$errors.firstName}
	/>
	<label for="lastName">Nom (requis)</label>
	<input
		name="lastName"
		type="text"
		bind:value={$form.lastName}
		aria-invalid={$errors.lastName ? 'true' : undefined}
		class:error={$errors.lastName}
	/>
	<label for="email">Email (requis)</label>
	<input
		name="email"
		type="text"
		bind:value={$form.email}
		aria-invalid={$errors.email ? 'true' : undefined}
		class:error={$errors.email}
	/>
	<label for="phone">Tel</label>
	<input type="text" name="phone" bind:value={$form.phone} />
	<label for="message">Message (requis)</label>
	<textarea
		name="message"
		bind:value={$form.message}
		aria-invalid={$errors.message ? 'true' : undefined}
		class:error={$errors.message}
	></textarea>
	<button class="callToAction">{$_('contact.send')}</button>
</form>
{#if $message}
	<div class="sent" transition:slide>
		<svg
			width="100"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="0.8"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				in:draw={{ delay: 500, duration: 1000 }}
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
		<p>
			{$message}
		</p>
	</div>
{/if}

<style lang="scss">
	form {
		padding: 0 $root-horizontal-spacing;
		margin: auto;
		margin-top: 48px;
		max-width: 480px;
	}
	input,
	button,
	textarea {
		font-family: $base-font-family;
		font-size: 1.4rem;
		outline: none;
		width: 100%;
		border: 0;
		padding: 12px;
		box-sizing: border-box;
		margin: 12px 0px;
		border: 1px solid #9e9ead;
	}
	input:focus,
	button:focus,
	textarea:focus {
		border-color: #505060;
	}
	button {
		cursor: pointer;
		background-color: #505060;
		color: white;
	}
	label {
		font-size: 1.1rem;
		font-style: italic;
	}
	textarea.error,
	input.error {
		border: 1px solid tomato;
		background-color: pink;
		transition: all 0.5s;
	}
	.sent {
		margin-top: 38px;
		text-align: center;
	}
</style>
