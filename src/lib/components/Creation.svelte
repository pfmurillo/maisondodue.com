<script lang="ts">
	import { observe } from '$lib/actions/observe';

	export let project: Project;

	const fadeIn = (event: CustomEvent) => {
		const node = event.target as HTMLElement;
		if (!node.style.opacity) {
			node.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
			node.style.opacity = '1';
		}
	};
</script>

<div class="creation" use:observe={{ threshold: 0.2 }} on:enterviewport={fadeIn}>
	{#each project.pictures as picture}
		<div style:background-image="url({picture})"></div>
	{/each}
	<div>{project.title}</div>
</div>

<style lang="scss">
	.creation {
		opacity: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin: 24px $root-horizontal-spacing;
		box-sizing: border-box;
	}
	.creation > div {
		width: 100%;
		aspect-ratio: 1;
		background-size: cover;
		background-position: center;
		box-sizing: border-box;
		scale: 0.9;
		transition: scale 0.3s;
	}
	.creation > div:last-of-type {
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: 24px;
		align-items: center;
		font-weight: bold;
		font-size: 1.3rem;
		overflow: hidden;
	}
	.creation > div:hover {
		scale: 1;
	}
	@media (max-width: $breakpoint-tablet) {
		.creation {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: $breakpoint-mobile) {
		.creation {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
