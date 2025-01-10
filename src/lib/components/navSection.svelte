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
		class="relative min-h-12 w-full md:aspect-square md:after:absolute md:after:top-0 md:after:h-full md:after:w-full md:after:rounded-3xl md:after:bg-vintage"
		><div
			style:background-image="url({sectionDetails.image})"
			class="absolute top-0 aspect-square w-full rounded-3xl bg-cover max-sm:hidden"
		></div>
		<span
			class="absolute top-0 z-30 flex w-full items-center justify-center font-serif text-5xl font-normal text-spinach-500 md:aspect-square md:text-white"
			>{sectionDetails.name}</span
		></a
	>
{/if}
