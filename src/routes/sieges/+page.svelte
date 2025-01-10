<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Image from '$lib/components/image.svelte';
	const hero = {
		title: m.yummy_basic_gull_view(),
		image: ''
	};
</script>

<Hero {hero} />

<div class="m-auto mb-14 mt-7 grid max-w-screen-lg grid-cols-2 gap-4 p-3 md:grid-cols-3">
	<div>
		<Image src="/sieges/MaisonDodue_Sièges_1.png" alt="" />
	</div>
	<div
		class="col-start-1 col-end-3 flex items-center rounded-3xl bg-champagne-500 p-6 text-lg leading-8 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 md:p-12"
	>
		Selon votre fauteuil et vos envies, Maison Dodue restaure vos assises en crin ou en mousse. Je
		me ferai un plaisir de vous proposer des matières premières responsables, de dénicher pour vous
		un tissu dans un stock dormant ou de vous montrer le potentiel d’une chute de cuir récupérée
		grâce à des partenaires de l’économie circulaire.
	</div>
	<div class="col-start-2 col-end-3 row-start-1 row-end-2 md:col-start-1 md:col-end-2">
		<Image src="/sieges/MaisonDodue_Sièges_2.png" alt="" />
	</div>
	<div><Image src="/sieges/MaisonDodue_Sièges_3.png" alt="" /></div>
	<div><Image src="/sieges/MaisonDodue_Sièges_4.png" alt="" /></div>
	<div
		class="bg-brownie-300 col-start-1 col-end-3 flex items-center rounded-3xl p-6 text-lg leading-8 text-white md:p-12"
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
