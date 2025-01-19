<script lang="ts">
	const { src, alt }: { src: string; alt: string } = $props();
</script>

<!-- <div
	class="relative aspect-square after:absolute after:top-0 after:h-full after:w-full after:rounded-3xl after:bg-vintage"
> -->
<div class="relative aspect-square">
	<img class="absolute aspect-square h-full w-full rounded-3xl object-cover" {src} {alt} />
</div>
