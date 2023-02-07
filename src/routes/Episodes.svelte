<script lang="ts">
	type EpiProp = {
		number: number;
		title: string;
	}[];

	export let episodes: EpiProp;
</script>

<nav>
	<ul>
		{#each episodes as episode}
			<li>
				<a href={`/show/${episode.number}`}>{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>
