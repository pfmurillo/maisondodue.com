<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Image from '$lib/components/image.svelte';
</script>

<Hero title="Jugaad!" />

<div class="m-auto mb-14 mt-7 grid max-w-screen-lg grid-cols-2 gap-4 p-3 md:grid-cols-3">
	<div
		class="col-start-1 col-end-3 flex items-center rounded-3xl bg-almond-500 p-6 leading-8 text-black md:col-start-1 md:col-end-4 md:p-12"
	>
		{m.early_keen_gecko_pet()}
	</div>
	<div>
		<Image src="/jugaad/08.webp" alt="" />
	</div>
	<div>
		<Image src="/jugaad/05.webp" alt="" />
	</div>
	<div>
		<Image src="/jugaad/03.webp" alt="" />
	</div>
	<div
		class="col-start-1 col-end-3 flex items-center rounded-3xl bg-almond-500 p-6 leading-8 text-black md:p-12"
	>
		{m.gaudy_less_cod_bloom()}
	</div>
	<div>
		<Image src="/jugaad/01.webp" alt="" />
	</div>
	<div>
		<Image src="/jugaad/02.webp" alt="" />
	</div>
	<div>
		<Image src="/jugaad/04.webp" alt="" />
	</div>
	<!-- <div
		class="col-start-1 col-end-3 flex items-center rounded-3xl bg-cassis-500 p-6 leading-8 text-white md:col-start-2 md:col-end-4 md:p-12"
	>
		{m.lazy_raw_squid_dial()}
	</div> -->
	<div
		class="col-start-1 col-end-3 row-start-7 row-end-8 flex items-center rounded-3xl bg-almond-500 p-6 leading-8 text-black md:col-start-2 md:col-end-3 md:row-start-5 md:row-end-6 md:p-12"
	>
		{m.icy_fun_rook_rush()}
	</div>
	<div>
		<Image src="/jugaad/06.webp" alt="" />
	</div>
	<div>
		<Image src="/jugaad/07.webp" alt="" />
	</div>
	<div>
		<Image src="/jugaad/09.webp" alt="" />
	</div>
</div>
