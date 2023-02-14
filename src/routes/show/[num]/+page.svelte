<script lang="ts">
	import type { DataProp } from './+page.server';

	export let data: DataProp;

	$: ({ episode, user } = data);
</script>

<h1>{episode.title}</h1>
<h1>{user.email}</h1>

{@html episode.html}
