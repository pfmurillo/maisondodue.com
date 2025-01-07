<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	let { data, children } = $props();
</script>

<ParaglideJS {i18n}>
	<Header />
	<main>{@render children()}</main>
	<Footer contactForm={data.form} />
</ParaglideJS>
