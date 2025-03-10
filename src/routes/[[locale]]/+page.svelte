<script lang="ts">
	import Description from '$lib/components/description.svelte';
	import * as m from '$lib/paraglide/messages.js';

	const descriptions = [
		m.awful_bad_gibbon_bake(),
		m.quick_aloof_anaconda_reside(),
		m.top_male_mouse_spin(),
		m.calm_dry_koala_chop(),
		'Clémence'
	];
</script>

<div
	style:background-image="url(/home/hero.webp)"
	class="relative flex h-[70vh] w-full flex-col justify-center bg-cover bg-center text-white after:absolute after:h-full after:w-full after:bg-vintage"
>
	<div class="z-10 m-auto max-w-screen-lg p-3 md:min-w-[1024px]">
		<h1
			class="z-10 mb-8 font-serif text-5xl drop-shadow-[0_2px_2px_rgba(90,90,90,0.5)] md:text-7xl"
		>
			{m.helpful_cuddly_vulture_ask()}
		</h1>
		<p class="z-10 mb-6 text-lg drop-shadow-[0_2px_2px_rgba(90,90,90,0.5)]">
			<span class="inline md:block">{m.maroon_misty_crocodile_boil()}</span>
			<span class="inline md:block">{m.free_muddy_trout_amaze()}</span>
			<span class="inline md:block">{m.lime_livid_insect_swim()}</span>
		</p>
	</div>
</div>

<Description {descriptions} />
