<script lang="ts">
	import Description from '$lib/components/description.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';

	const descriptions = [
		m.polite_born_penguin_hurl(),
		m.topical_warm_owl_hope(),
		m.wise_honest_rabbit_aspire(),
		m.legal_due_baboon_hike(),
		m.tired_keen_boar_accept(),
		m.keen_every_monkey_transform(),
		m.low_maroon_puffin_pause()
	];
</script>

<Hero title={m.round_tiny_llama_gasp()} />
<Description {descriptions} />
