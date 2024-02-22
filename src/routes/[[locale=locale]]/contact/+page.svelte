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

<p>{@html $_('contact.p1')}</p>
<form method="POST" use:enhance>
	<label for="firstName">{$_('contact.labelfirstname')} ({$_('contact.labelrequired')})</label>
	<input
		name="firstName"
		type="text"
		maxlength="50"
		bind:value={$form.firstName}
		aria-invalid={$errors.firstName ? 'true' : 'false'}
	/>
	<label for="lastName">{$_('contact.labellastname')} ({$_('contact.labelrequired')})</label>
	<input
		name="lastName"
		type="text"
		maxlength="50"
		bind:value={$form.lastName}
		aria-invalid={$errors.lastName ? 'true' : 'false'}
	/>
	<label for="email">{$_('contact.labelemail')} ({$_('contact.labelrequired')})</label>
	<input
		name="email"
		type="text"
		maxlength="50"
		bind:value={$form.email}
		aria-invalid={$errors.email ? 'true' : 'false'}
	/>
	<label for="phone">{$_('contact.labelphone')}</label>
	<input type="text" name="phone" maxlength="50" bind:value={$form.phone} />
	<label for="message">{$_('contact.labelmessage')} ({$_('contact.labelrequired')})</label>
	<textarea
		name="message"
		maxlength="500"
		bind:value={$form.message}
		aria-invalid={$errors.message ? 'true' : 'false'}
	></textarea>
	<button class="callToAction">{$_('contact.send')}</button>
</form>
{#if $message === 'message_sent'}
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
				in:draw={{ delay: 500, duration: 800 }}
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
		<p>
			{@html $_('contact.messagesent')}
		</p>
	</div>
{/if}
<div class="legal">
	{@html $_('contact.legal')}
</div>

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
	textarea {
		height: 240px;
		resize: vertical;
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
	textarea[aria-invalid='true'],
	input[aria-invalid='true'] {
		border: 1px solid tomato;
		background-color: pink;
		transition: all 0.5s;
	}
	.sent {
		margin-top: 38px;
		text-align: center;
	}
	.legal {
		margin: 68px $root-horizontal-spacing 48px $root-horizontal-spacing;
		font-size: 1rem;
	}
</style>
