<script lang="ts">
	import type { dataProp } from './+page';

	export let data: dataProp;

	$: ({ episode } = data);
</script>

<h1>{episode.title}</h1>

{@html episode.html}
