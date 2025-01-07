<script lang="ts">
	interface Image {
		path: string;
		description: string;
	}
	const { images }: { images: Image[] } = $props();
</script>

<div class="m-auto mb-16 grid max-w-screen-lg grid-cols-2 gap-4 p-3 md:grid-cols-3">
	{#each images as image}
		<div class="flex items-center justify-center">
			<img
				class="relative aspect-square rounded-xl object-cover after:absolute after:top-0 after:h-full after:w-full after:rounded-3xl after:bg-vintage"
				src={image.path}
				alt={image.description}
			/>
		</div>
	{/each}
</div>
