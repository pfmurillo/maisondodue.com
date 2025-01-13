<script lang="ts">
	const { descriptions }: { descriptions: string[] } = $props();
</script>

<div class="m-auto mt-8 max-w-screen-lg p-3 md:mt-16 md:p-5">
	{#each descriptions as description}
		<p class="mb-4 text-lg leading-8">{description}</p>
	{/each}
</div>
