<script lang="ts">
	import { goto } from '$app/navigation';
	// lifcecycle, afterNavigate, beforeNavigate
	// disableScrollhandling - Sveltekits built in scroll handling (Not recommended)
	// goto => prgorammatically routing
	// invalidate => load function on active page re-run
	// invalidateAll => causes all load function to re-run
	// preloadCode => load js code for given routes
	// preloadData => load data from load functions for given routes 

	import { PUBLIC_LUT_PUB_KEY } from '$env/static/public';

	import Episodes from './Episodes.svelte';
	import Header from './Header.svelte';
	import { navigating } from '$app/stores';
	import { browser, building, dev, version } from '$app/environment';

	export let data: any;
	$: ({ all_episodes } = data);
	//browser: boolean, if app is running in a browser
	//dev: boolean, true IF running in dev mode
	//building: boolean, true IF currently build for production
	//version: string, config.kit.version.name
</script>

{#if !!$navigating}
	<div class="loading">Loading...</div>
{/if}

<main>
	<div class="main">
		<Header />
		<button on:click={() => goto('/contact')}>Change page</button>
		<slot />
	</div>
	<aside>
		<Episodes episodes={all_episodes} />
	</aside>
</main>

<style lang="postcss">
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
