<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Image from '$lib/components/image.svelte';
</script>

<Hero title="Sièges" />

<div class="m-auto mb-14 mt-7 grid max-w-screen-lg grid-cols-2 gap-4 p-3 md:grid-cols-3">
	<div>
		<Image src="/sieges/01.webp" alt="" />
	</div>
	<div
		class="col-start-1 col-end-3 flex items-center rounded-3xl bg-moka-500 p-6 text-lg leading-8 text-white md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 md:p-12"
	>
		Selon votre fauteuil et vos envies, Maison Dodue restaure vos assises en crin ou en mousse. Je
		me ferai un plaisir de vous proposer des matières premières responsables, de dénicher pour vous
		un tissu dans un stock dormant ou de vous montrer le potentiel d’une chute de cuir récupérée
		grâce à des partenaires de l’économie circulaire.
	</div>
	<div class="col-start-2 col-end-3 row-start-1 row-end-2 md:col-start-1 md:col-end-2">
		<Image src="/sieges/02.webp" alt="" />
	</div>
	<div><Image src="/sieges/03.webp" alt="" /></div>
	<div><Image src="/sieges/04.webp" alt="" /></div>
	<div
		class="col-start-1 col-end-3 flex items-center rounded-3xl bg-curry-300 p-6 text-lg leading-8 text-white md:p-12"
	>
		Maison Dodue fera également le maximum pour travailler avec des ressourceries, pour donner une
		seconde vie à certaines fournitures et veillera au meilleur recyclage possible des déchets.
		Penser circulaire pourrait bien être une clé du succès, non ?
	</div>
	<div><Image src="/sieges/05.webp" alt="" /></div>
	<div><Image src="/sieges/06.webp" alt="" /></div>
	<div><Image src="/sieges/07.webp" alt="" /></div>
	<div><Image src="/sieges/08.webp" alt="" /></div>
	<div><Image src="/sieges/09.webp" alt="" /></div>
	<div><Image src="/sieges/10.webp" alt="" /></div>
</div>
