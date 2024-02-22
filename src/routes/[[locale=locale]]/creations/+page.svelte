<script lang="ts">
	import { _ } from '$lib/i18n';
	import Creation from '$lib/components/Creation.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';

	const projects: Project[] = [
		{
			title: 'Crapeau',
			pictures: [
				'/creations/01_01.jpg',
				'/creations/01_02.jpg',
				'/creations/01_03.jpg',
				'/creations/01_04.jpg'
			]
		},
		{
			title: 'Fauteuil 1',
			pictures: ['/creations/01.jpg', '/creations/02.jpg', '/creations/03.jpg']
		},
		{
			title: 'Fauteuil 2',
			pictures: ['/creations/06.jpg', '/creations/04.jpg', '/creations/05.jpg', '/creations/07.jpg']
		}
	];
</script>

<h1>{$_('creations.h1')}</h1>

<p>{$_('creations.p1')}</p>

{#each projects as project}
	<Creation {project} />
{/each}

<CallToAction />
