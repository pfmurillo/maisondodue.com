<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Description from '$lib/components/description.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	const hero = {
		title: m.yummy_basic_gull_view(),
		image: '/sieges/MaisonDodue_Si%C3%A8ges_10.png'
	};
	const descriptions = [m.tasty_big_elk_fetch()];
	const images = [
		{
			path: '/sieges/MaisonDodue_Sièges_1.png',
			description: ''
		},
		{
			path: '/sieges/MaisonDodue_Sièges_2.png',
			description: ''
		},
		{
			path: '/sieges/MaisonDodue_Sièges_3.png',
			description: ''
		},
		{
			path: '/sieges/MaisonDodue_Sièges_4.png',
			description: ''
		},
		{
			path: '/sieges/MaisonDodue_Sièges_5.png',
			description: ''
		},
		{
			path: '/sieges/MaisonDodue_Sièges_6.png',
			description: ''
		},
		{
			path: '/sieges/MaisonDodue_Sièges_7.png',
			description: ''
		},
		{
			path: '/sieges/MaisonDodue_Sièges_8.png',
			description: ''
		},
		{
			path: '/sieges/MaisonDodue_Sièges_9.png',
			description: ''
		},
		{
			path: '/sieges/MaisonDodue_Sièges_10.png',
			description: ''
		}
	];
</script>

<Hero {hero} />
<Description {descriptions} />
<Gallery {images} />
