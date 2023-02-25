<script lang="ts">
	import { navigating, page, updated, getStores } from '$app/stores';

	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ title } = data);
</script>

<h3>{title}</h3>
