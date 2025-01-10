<script lang="ts">
	interface Hero {
		title: string;
		image: string;
	}
	const { hero }: { hero: Hero } = $props();
	const { title, image } = hero;
</script>

<div class="m-auto max-w-screen-lg p-3 pt-16 md:pt-24">
	<h1 class="mt-4 font-serif text-5xl text-spinach-500 md:mt-8 md:text-6xl">{title}</h1>
</div>
