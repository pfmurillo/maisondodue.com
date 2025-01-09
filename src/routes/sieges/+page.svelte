<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Description from '$lib/components/description.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	import Image from '$lib/components/image.svelte';
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
<!-- <Description {descriptions} />-->
<!-- <Gallery {images} /> -->

<div class="m-auto mb-14 mt-7 grid max-w-screen-lg gap-4 p-3 md:grid-cols-3">
	<div><Image src="/sieges/MaisonDodue_Sièges_1.png" alt="" /></div>
	<div class="bg-champagne-500 col-span-2 flex items-center rounded-3xl p-12 text-lg leading-8">
		Selon votre fauteuil et vos envies, Maison Dodue restaure vos assises en crin ou en mousse. Je
		me ferai un plaisir de vous proposer des matières premières responsables, de dénicher pour vous
		un tissu dans un stock dormant ou de vous montrer le potentiel d’une chute de cuir récupérée
		grâce à des partenaires de l’économie circulaire.
	</div>
	<div><Image src="/sieges/MaisonDodue_Sièges_2.png" alt="" /></div>
	<div><Image src="/sieges/MaisonDodue_Sièges_3.png" alt="" /></div>
	<div><Image src="/sieges/MaisonDodue_Sièges_4.png" alt="" /></div>
	<div
		class="col-span-2 flex items-center rounded-3xl bg-spinach-300 p-12 text-lg leading-8 text-white"
	>
		Maison Dodue fera également le maximum pour travailler avec des ressourceries, pour donner une
		seconde vie à certaines fournitures et veillera au meilleur recyclage possible des déchets.
		Penser circulaire pourrait bien être une clé du succès, non ?
	</div>
	<div><Image src="/sieges/MaisonDodue_Sièges_5.png" alt="" /></div>
	<div><Image src="/sieges/MaisonDodue_Sièges_6.png" alt="" /></div>
	<div><Image src="/sieges/MaisonDodue_Sièges_7.png" alt="" /></div>
	<div><Image src="/sieges/MaisonDodue_Sièges_8.png" alt="" /></div>
	<div><Image src="/sieges/MaisonDodue_Sièges_9.png" alt="" /></div>
	<div><Image src="/sieges/MaisonDodue_Sièges_10.png" alt="" /></div>
</div>
