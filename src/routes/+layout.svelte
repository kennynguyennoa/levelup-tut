<script lang="ts">
	import Episodes from './Episodes.svelte';
	import Header from './Header.svelte';
	import { navigating } from '$app/stores';
	import { browser, building, dev, version } from '$app/environment';

	export let data: any;
	$: ({ all_episodes } = data);
	$: console.log(browser, building, dev, version);
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
