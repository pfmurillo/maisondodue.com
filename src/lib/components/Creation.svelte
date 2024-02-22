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
	{#each project.pictures as picture, i}
		<div style:background-image="url({picture})">
			{#if i === 0}
				<div class="description">
					<span>{project.title}</span>
					<p>blablalbla</p>
				</div>
			{/if}
		</div>
	{/each}
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
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.description {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 74%;
		aspect-ratio: 1;
		background-color: rgba($base-font-color, 0.48);
		padding: 24px;
		overflow: hidden;
		color: white;
		border: 1px solid white;
	}
	.description > span {
		font-weight: bold;
		font-size: 3.6rem;
	}
	.description > p {
		font-size: 1.6rem;
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
