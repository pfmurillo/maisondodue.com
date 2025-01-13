<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Image from '$lib/components/image.svelte';

	const hero = {
		title: m.short_formal_chipmunk_type(),
		image: '/decor/hero.jpg'
	};
	const descriptions = [m.funny_glad_turtle_dash()];
	const images = [
		{
			path: '/decor/',
			description: ''
		},
		{
			path: '/decor/.png',
			description: ''
		},
		{
			path: '/decor/.png',
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
		/* {
			path: '/decor/MaisonDodue_Décor4.png',
			description: ''
		}, */
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

<div class="m-auto mb-14 mt-7 grid max-w-screen-lg grid-cols-2 gap-4 p-3 md:grid-cols-3">
	<div><Image src="/decor/MaisonDodue_Décor3.png" alt="" /></div>
	<div><Image src="/decor/MaisonDodue_Rideaux.jpg" alt="" /></div>
	<div><Image src="/decor/MaisonDodue_Décor1.png" alt="" /></div>
	<div><Image src="/decor/MaisonDodue_Décor2.png" alt="" /></div>
	<div><Image src="/decor/MaisonDodue_Décor5.png" alt="" /></div>
	<div
		class="bg-moka-500 col-start-1 col-end-3 row-start-2 row-end-3 flex items-center rounded-3xl p-6 text-lg leading-8 text-white md:p-12"
	>
		Maison Dodue c’est aussi un lieu qui habille vos fenêtres (rideaux, voilages, stores), vos têtes
		de lit et garnit vos canapés des coussins qui vous donnent envie. Discutons-en et choisissons
		ensemble des tissus d’ameublement les plus adaptés.
	</div>
	<div><Image src="/decor/IMG-20240114-WA0005.jpg" alt="" /></div>
</div>
