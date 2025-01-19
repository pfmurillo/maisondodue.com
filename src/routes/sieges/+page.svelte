<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Image from '$lib/components/image.svelte';
</script>

<Hero title={m.aloof_vexed_alpaca_thrive()} />

<div class="m-auto mb-14 mt-7 grid max-w-screen-lg grid-cols-2 gap-4 p-3 md:grid-cols-3">
	<div>
		<Image src="/sieges/01.webp" alt="" />
	</div>
	<div
		class="bg-almond-500 col-start-1 col-end-3 flex items-center rounded-3xl p-6 leading-8 text-black md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 md:p-12"
	>
		{m.slimy_wise_grebe_gasp()}
	</div>
	<div class="col-start-2 col-end-3 row-start-1 row-end-2 md:col-start-1 md:col-end-2">
		<Image src="/sieges/02.webp" alt="" />
	</div>
	<div><Image src="/sieges/03.webp" alt="" /></div>
	<div><Image src="/sieges/04.webp" alt="" /></div>
	<div
		class="bg-almond-500 col-start-1 col-end-3 flex items-center rounded-3xl p-6 leading-8 text-black md:p-12"
	>
		{m.key_patchy_dingo_link()}
	</div>
	<div><Image src="/sieges/05.webp" alt="" /></div>
	<div><Image src="/sieges/06.webp" alt="" /></div>
	<div><Image src="/sieges/07.webp" alt="" /></div>
	<div><Image src="/sieges/08.webp" alt="" /></div>
	<div><Image src="/sieges/09.webp" alt="" /></div>
	<div><Image src="/sieges/10.webp" alt="" /></div>
</div>
