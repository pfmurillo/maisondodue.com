<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	let { data, children } = $props();
	import { page } from '$app/state';
	import * as m from '$lib/paraglide/messages.js';
	import { afterNavigate } from '$app/navigation';

	let title: string = $state('');

	afterNavigate(() => {
		switch (page.route.id) {
			case '/sieges':
				title = m.lost_heavy_mammoth_zap();
				break;
			case '/decor':
				title = m.awake_key_pelican_mix();
				break;
			case '/jugaad':
				title = 'Jugaad!';
				break;
			case '/mentions':
				title = m.grand_happy_bear_bake();
				break;
			default:
				title = m.real_many_rat_dig();
				break;
		}
	});
</script>

<svelte:head>
	<title>Maison Dodue - {title}</title>
	<!-- <meta name="description" content="This is where the description goes for SEO" /> -->
</svelte:head>

<ParaglideJS {i18n}>
	<Header />
	<main class="bg-champagne-300 pb-12">{@render children()}</main>
	<Footer contactForm={data.form} />
</ParaglideJS>
