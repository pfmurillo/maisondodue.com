<script lang="ts">
	const { src, alt }: { src: string; alt: string } = $props();
</script>

<div class="relative aspect-square">
	<img class="absolute aspect-square h-full w-full rounded-3xl object-cover" {src} {alt} />
</div>
