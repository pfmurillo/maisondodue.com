<script lang="ts">
	import 'reset-css';
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { currentLocale } from '$lib/i18n';
	$: $currentLocale = $page.data.locale;
</script>

<svelte:head>
	<title>Maison Dodue</title>
	<meta name="description" content="" />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
