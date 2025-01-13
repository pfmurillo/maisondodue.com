<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';
	import Image from '$lib/components/image.svelte';
</script>

<Hero title={m.short_formal_chipmunk_type()} />

<div class="m-auto mb-14 mt-7 grid max-w-screen-lg grid-cols-2 gap-4 p-3 md:grid-cols-3">
	<div><Image src="/decor/01.webp" alt="" /></div>
	<div><Image src="/decor/02.webp" alt="" /></div>
	<div><Image src="/decor/03.webp" alt="" /></div>
	<div><Image src="/decor/04.webp" alt="" /></div>
	<div><Image src="/decor/05.webp" alt="" /></div>
	<div
		class="col-start-1 col-end-3 row-start-2 row-end-3 flex items-center rounded-3xl bg-moka-500 p-6 leading-8 text-white md:p-12"
	>
		{m.fit_less_wallaby_trust()}
	</div>
	<div><Image src="/decor/06.webp" alt="" /></div>
</div>
