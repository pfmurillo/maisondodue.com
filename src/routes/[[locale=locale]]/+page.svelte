<script lang="ts">
	import { _, currentLocale } from '$lib/i18n';
	import CallToAction from '$lib/components/CallToAction.svelte';
</script>

<h1 class="intro" data-text={$_('home.h1')}>{$_('home.h1')}</h1>

<p>{$_('home.p1')}</p>
<p>{$_('home.p2')}</p>
<p>{$_('home.p3')}</p>
<p>{$_('home.p4')}</p>
<span>Clémence</span>

<CallToAction />

<style lang="scss">
	/* h1 {
		display: flex;
		flex-direction: column;
		height: calc(38vh);
		background-position: center left;
		background-size: cover;
		align-items: center;
		justify-content: center;
		margin: 0 0 48px 0;
		overflow: hidden;
	} */
	span {
		transform: rotate(-6deg);
		font-size: 1.6rem;
		display: inline-block;
		margin-left: 188px;
		margin-top: 18px;
		font-family: $font-family-logo;
	}
</style>
