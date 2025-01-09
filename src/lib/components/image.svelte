<script lang="ts">
	interface Image {
		path: string;
		description: string;
	}
	const { src, alt }: { src: string; alt: string } = $props();
</script>

<img
	class="relative aspect-square rounded-3xl object-cover after:absolute after:top-0 after:h-full after:w-full after:rounded-3xl after:bg-vintage"
	{src}
	{alt}
/>
