<script lang="ts">
	let total: string = "";

	async function load() {
		const response = await fetch("/api/get-files", {
			method: "GET",
		});

		total = await response.json();
	}

	import Image from "$lib/components/image.svelte";
</script>

{#await load()}
	<p>Loading...</p>
{:then}
	{#each total as file}
		<Image src={file} />
	{/each}
{/await}
