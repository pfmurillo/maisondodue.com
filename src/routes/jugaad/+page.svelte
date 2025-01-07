<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Description from '$lib/components/description.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	const hero = {
		title: m.odd_curly_sloth_stab(),
		image: '/jugaad/hero.jpg'
	};
	const descriptions = [
		m.arable_careful_marmot_bloom(),
		m.gray_fun_fireant_spark(),
		m.royal_pink_hedgehog_persist(),
		m.sound_day_gecko_reside(),
		m.awful_known_flamingo_pull()
	];
	const images = [
		{
			path: '/jugaad/69bed16d-d24a-441f-b0c8-fdf5374dae98.png',
			description: ''
		},
		{
			path: '/jugaad/760cb900-54fb-43b7-a3f4-cfd51a9b5583.png',
			description: ''
		},
		{
			path: '/jugaad/b0b47710-4fe2-496e-8776-58cf162c28e9.png',
			description: ''
		},
		{
			path: '/jugaad/IMG_20230605_215714.jpg',
			description: ''
		},
		{
			path: '/jugaad/IMG_20240523_105511.jpg',
			description: ''
		},
		{
			path: '/jugaad/MaisonDodue_Jugaad.png',
			description: ''
		},
		{
			path: '/jugaad/MaisonDodue_Jugaad_Header.png',
			description: ''
		}
	];
</script>

<Hero {hero} />
<Description {descriptions} />
<Gallery {images} />
