<script lang="ts">
	import Episodes from './Episodes.svelte';
	import Header from './Header.svelte';

	export let data: any;
	$: ({ all_episodes } = data);
</script>

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
	main {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 20px;
	}

	aside {
		order: -1;
	}
</style>
