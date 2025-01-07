<script lang="ts">
	const { descriptions }: { descriptions: string[] } = $props();
</script>

<div class="m-auto mb-10 mt-16 max-w-screen-lg p-3">
	{#each descriptions as description}
		<p class="mb-4 text-lg leading-8">{description}</p>
	{/each}
</div>
