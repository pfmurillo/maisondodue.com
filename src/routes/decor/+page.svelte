<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Description from '$lib/components/description.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	const hero = {
		title: m.short_formal_chipmunk_type(),
		image: '/decor/hero.jpg'
	};
	const descriptions = [m.funny_glad_turtle_dash()];
	const images = [
		{
			path: '/decor/IMG-20240114-WA0005.jpg',
			description: ''
		},
		{
			path: '/decor/MaisonDodue_Décor_Header.png',
			description: ''
		},
		{
			path: '/decor/MaisonDodue_Décor1.png',
			description: ''
		},
		{
			path: '/decor/MaisonDodue_Décor2.png',
			description: ''
		},
		{
			path: '/decor/MaisonDodue_Décor3.png',
			description: ''
		},
		{
			path: '/decor/MaisonDodue_Décor4.png',
			description: ''
		},
		{
			path: '/decor/MaisonDodue_Décor5.png',
			description: ''
		},
		{
			path: '/decor/MaisonDodue_Rideaux.jpg',
			description: ''
		}
	];
</script>

<Hero {hero} />
<Description {descriptions} />
<Gallery {images} />
