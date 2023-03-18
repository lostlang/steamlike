<script lang="ts">
	import Image from "$lib/components/image.svelte";

	let images: string[] = [];
	let randomImage: string[] = [];

	async function loadImage() {
		const response = await fetch("/api/getImages");
		console.log(response);
		images = await response.json();
	}

	function genetateRandomList(size: number) {
		let list = [];

		for (let i = 0; i < size; i++) {
			list.push(
				images[
					Math.floor(
						Math.random() * images.length
					)
				]
			);
		}

		return list;
	}

	async function main() {
		await loadImage();
		randomImage = genetateRandomList(50);
	}
</script>

<svelte:head>
	<title>Animation</title>
</svelte:head>

<div id="container">
	{#await main()}
		<p>Loading...</p>
	{:then}
		{#each randomImage as image}
			<Image src={image} />
		{/each}
	{/await}
</div>

<style>
	#container {
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: -1;
	}

	* {
		background-color: rgb(17, 18, 29);
	}
</style>
