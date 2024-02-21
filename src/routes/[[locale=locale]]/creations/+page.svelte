<script lang="ts">
	import { _ } from '$lib/i18n';
	import Carrousel from '$lib/components/Carrousel.svelte';
	import CallToAction from '$lib/components/CallToAction.svelte';

	const projects: Project[] = [
		{
			title: 'Fauteuil 1',
			pictures: ['/creations/01.jpg', '/creations/02.jpg', '/creations/03.jpg']
		},
		{
			title: 'Fauteuil 2',
			pictures: ['/creations/04.jpg', '/creations/05.jpg', '/creations/06.jpg', '/creations/07.jpg']
		}
	];
</script>

<h1>{$_('creations.h1')}</h1>

<p>{$_('creations.p1')}</p>

{#each projects as project, i}
	<Carrousel {project} />
{/each}

<CallToAction />
