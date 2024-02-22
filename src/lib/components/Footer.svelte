<script lang="ts">
	import { _, availableLocales, currentLocale } from '$lib/i18n';
</script>

<footer>
	<div>
		Maison Dodue<br />
		Paris 18ème
	</div>
	<ul>
		{#each availableLocales.filter((l) => l != $currentLocale) as availableLocale}
			<li><a href="/{availableLocale}">{$_('footer.version', availableLocale)}</a></li>
		{/each}
		<li><a href="/{$currentLocale}/mentions">{$_('footer.mentions')}</a></li>
		<li>tous droits réservés 2023-{new Date().getFullYear()}</li>
	</ul>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: center;
		font-size: 1.1rem;
		background-color: $color-accent;
		color: aliceblue;
		text-align: center;
		padding: 48px;
		margin-top: 48px;
		line-height: 32px;
	}
	footer > div {
		text-align: right;
	}
	footer > ul {
		text-align: left;
		margin-left: 24px;
		padding-left: 24px;
		border-left: 1px solid beige;
	}
	a {
		font-weight: bold;
		color: white;
	}
</style>
