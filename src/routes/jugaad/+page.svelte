<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Image from '$lib/components/image.svelte';
	const hero = {
		title: m.odd_curly_sloth_stab(),
		image: '/jugaad/hero.jpg'
	};
	/* const descriptions = [
		m.arable_careful_marmot_bloom(),
		m.gray_fun_fireant_spark(),
		m.royal_pink_hedgehog_persist(),
		m.sound_day_gecko_reside(),
		m.awful_known_flamingo_pull()
	]; */
</script>

<Hero {hero} />

<div class="m-auto mb-14 mt-7 grid max-w-screen-lg grid-cols-2 gap-4 p-3 md:grid-cols-3">
	<div
		class="bg-moka-500 col-start-1 col-end-3 flex items-center rounded-3xl p-6 text-lg leading-8 text-white md:col-start-1 md:col-end-4 md:p-12"
	>
		Jugaad qui signifierait « faire plus avec moins » en hindi ou comment d’une bidouille, d’une
		idée peut naître quelque chose d’ingénieux. Jugaad ou comment quelque chose sans valeur aux yeux
		de quelqu’un peut être fascinant pour l’autre. J’ai eu la chance de vivre plusieurs années à New
		Delhi et de beaucoup voyager dans ce grand pays qui m’a tant marquée. Jugaad pour moi, c’est
		donner la chance à un objet de (re)trouver son intérêt, sa beauté, sa folie !
	</div>
	<div>
		<Image src="/jugaad/69bed16d-d24a-441f-b0c8-fdf5374dae98.png" alt="" />
	</div>
	<div>
		<Image src="/jugaad/760cb900-54fb-43b7-a3f4-cfd51a9b5583.png" alt="" />
	</div>
	<div>
		<Image src="/jugaad/b0b47710-4fe2-496e-8776-58cf162c28e9.png" alt="" />
	</div>
	<div
		class="col-start-1 col-end-3 flex items-center rounded-3xl bg-spinach-300 p-6 text-lg leading-8 text-white md:p-12"
	>
		Certains parlent « d’ingéniosité frugale ». Jugaad en tant que tapissier qui fait son maximum
		pour avoir une pratique raisonnée de son métier, c’est la possibilité de dire oui à la
		créativité de mes clients pour réaliser leurs idées dans la mesure de mes possibles !
	</div>
	<div>
		<Image src="/jugaad/IMG_20230605_215714.jpg" alt="" />
	</div>
	<div>
		<Image src="/jugaad/IMG_20240523_105511.jpg" alt="" />
	</div>
	<div
		class="col-start-1 col-end-3 flex items-center rounded-3xl bg-cassis-500 p-6 text-lg leading-8 text-white md:col-start-2 md:col-end-4 md:p-12"
	>
		Un canevas encadré transformé en dossier de médaillon puis finalement en coussin, une passion
		pour la toile forte et l’envie d’en faire le « tissu » final avec une finition cloutée,
		restaurer une petite chaise chinée avec un tissu issu d’un stock dormant…
	</div>
	<div
		class="bg-curry-300 col-start-1 col-end-3 row-start-8 row-end-9 flex items-center rounded-3xl p-6 text-lg leading-8 text-white md:col-start-1 md:col-end-2 md:row-start-5 md:row-end-6 md:p-12"
	>
		Maison Dodue fera son maximum pour réaliser votre envie, contactez-moi pour en discuter !
	</div>
	<div>
		<Image src="/jugaad/MaisonDodue_Jugaad.png" alt="" />
	</div>
	<div>
		<Image src="/jugaad/MaisonDodue_Jugaad_Header.png" alt="" />
	</div>
</div>
