<script lang="ts">
	import { _, currentLocale } from '$lib/i18n';
</script>

<a href="/{$currentLocale}/contact">{@html $_('calltoaction.a')} </a>

<style lang="scss">
	a {
		cursor: pointer;
		background-color: #505060;
		color: white;
		border: 1px solid white;
		display: block;
		margin: 96px auto;
		width: fit-content;
		text-align: center;
		padding: 18px 24px;
		text-decoration: none;
		border-radius: 2px;
		box-shadow: 0px 0px 8px #50605f;
		transition: box-shadow 300ms ease-in-out;
	}
	a:hover {
		box-shadow: 0px 0px 18px #50605f;
	}
	@media (max-width: $breakpoint-mobile) {
		a {
			font-size: 1.2rem;
		}
	}
</style>
