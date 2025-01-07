<script lang="ts">
	interface Hero {
		title: string;
		image: string;
	}
	const { hero }: { hero: Hero } = $props();
	const { title, image } = hero;
</script>

<!-- <div style:background-image="url({image})" class="bg-cover bg-center">
	<div class="bg-vintage py-12 pl-6 md:p-48">
		<h1 class="mt-4 font-serif text-5xl text-white md:text-6xl">{title}</h1>
	</div>
</div> -->

<div class="m-auto max-w-screen-lg p-3 pt-24">
	<h1 class="text-spinach-300 mt-4 font-serif text-5xl md:text-6xl">{title}</h1>
</div>
