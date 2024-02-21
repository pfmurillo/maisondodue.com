<script lang="ts">
	import { observe } from '$lib/actions/observe';

	export let project: Project;

	const enterViewport = (event: CustomEvent) => {
		const node = event.target as HTMLElement;
		if (!node.style.opacity) {
			node.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
			node.style.opacity = '1';
		}
	};
</script>

<div class="carrousel" use:observe={{ threshold: 0.2 }} on:enterviewport={enterViewport}>
	{#each project.pictures as picture}
		<div style:background-image="url({picture})"></div>
	{/each}
	<div data-title={project.title}>{project.title}</div>
</div>

<style lang="scss">
	.carrousel {
		opacity: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 24px $root-horizontal-spacing;
		box-sizing: border-box;
	}
	.carrousel > div {
		width: 100%;
		aspect-ratio: 1;
		background-size: cover;
		background-position: center;
		box-sizing: border-box;
		scale: 0.9;
		transition: scale 0.3s;
	}
	.carrousel > div:last-of-type {
		display: flex;
		flex-direction: column;
		background-color: white;
		padding: 24px;
		align-items: center;
		font-weight: bold;
		font-size: 1.3rem;
		overflow: hidden;
	}
	.carrousel > div:hover {
		scale: 1;
	}
	@media (min-width: 680px) {
		.carrousel {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
