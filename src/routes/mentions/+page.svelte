<script lang="ts">
	import Description from '$lib/components/description.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/hero.svelte';

	const descriptions = [
		'Identité de l’entreprise : Maison Dodue, Entreprise individuelle dont l’atelier est situé au 4 rue Jean Varennes, 75018 Paris, France.',
		'Numéro de SIREN : 827 961 343',
		'Email : contact@maisondodue.com',
		'Téléphone : 0782732526',
		'N° TVA intracommunautaire : FR 94827961343',
		'Hébergeur du site : Vercel',
		'Propriété intellectuelle et contrefaçon : Le propriétaire du site est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, vidéos, logo, graphismes, icônes, sons... Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable obtenue de Maison Dodue. Toute exploitation non autorisée du site ou de l’un des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.'
	];
</script>

<Hero title={m.round_tiny_llama_gasp()} />
<Description {descriptions} />
