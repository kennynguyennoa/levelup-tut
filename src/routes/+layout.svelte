<script lang="ts">
	import Episodes from './Episodes.svelte';
	import Header from './Header.svelte';
	import { navigating } from '$app/stores';

	export let data: any;
	$: ({ all_episodes } = data);
</script>

{#if !!$navigating}
	<div class="loading">Loading...</div>
{/if}

<main>
	<div class="main">
		<Header />
		<slot />
	</div>
	<aside>
		<Episodes episodes={all_episodes} />
	</aside>
</main>

<style>
	.loading {
		display: grid;
		place-items: center;
		height: 100vh;
	}
	main {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 20px;
	}

	aside {
		order: -1;
	}
</style>
