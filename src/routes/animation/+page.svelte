<script lang="ts">
	let total: string = "";

	async function load() {
		const response = await fetch("/api/get-files", {
			method: "GET",
		});

		total = await response.json();
	}
</script>

<div id="container" />
{#await load()}
	<p>Loading...</p>
{:then}
	{#each total as file}
		<p>{file}</p>
	{/each}
{/await}

<style>
	#container {
		height: 1080px;
		width: 1920px;
		position: absolute;
		z-index: -1;
	}

	* {
		background-color: rgb(17, 18, 29);
	}
</style>
