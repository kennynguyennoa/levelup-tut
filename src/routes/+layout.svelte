<script lang="ts">
	import Episodes from './Episodes.svelte';

	export let data: any;
	$: ({ all_episodes } = data);
</script>

<main>
	<div class="main">
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
