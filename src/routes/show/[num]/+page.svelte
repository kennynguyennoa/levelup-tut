<script lang="ts">
	import type { DataProp } from './+page.server';

	export let data: DataProp;

	$: ({ episode } = data);
</script>

<h1>{episode.title}</h1>

{@html episode.html}
