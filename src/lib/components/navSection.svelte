<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		sectionDetails?: {
			name: string;
			path: string;
			image: string;
		};
		children?: Snippet;
	}
	let { sectionDetails, children }: Props = $props();
</script>

{#if children}
	{@render children()}
{:else if sectionDetails}
	<a
		href={sectionDetails.path}
		class="relative after:absolute after:top-0 after:h-full after:w-full after:rounded-3xl after:bg-vintage"
		><div
			style:background-image="url({sectionDetails.image})"
			class="flex aspect-square w-72 items-center justify-center rounded-3xl bg-cover"
		>
			<span class="z-30 font-serif text-5xl font-normal text-white">{sectionDetails.name}</span>
		</div></a
	>
{/if}
