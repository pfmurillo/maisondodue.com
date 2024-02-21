<script lang="ts">
	import { _, currentLocale } from '$lib/i18n';
</script>

<a href="/{$currentLocale}/contact">{$_('global.calltoaction')} </a>

<style lang="scss">
	a {
		cursor: pointer;
		background-color: #505060;
		color: white;
		border: 1px solid white;
		box-shadow: 0px 0px 18px #50605f;
		display: block;
		margin: 96px auto;
		width: fit-content;
		text-align: center;
		padding: 18px 24px;
		text-decoration: none;
		border-radius: 2px;
		transition: transform 300ms ease-in-out;
	}
	a:hover {
		transform: scale(1.03);
	}
	@media (max-width: $breakpoint-mobile) {
		a {
			font-size: 1.2rem;
		}
	}
</style>
