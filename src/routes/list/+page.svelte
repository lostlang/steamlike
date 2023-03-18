<script lang="ts">
	let images: string = "";

	async function loadImage() {
		const response = await fetch("/api/getImages");
		images = await response.json();
	}

	import Image from "$lib/components/image.svelte";
</script>

{#await loadImage()}
	<p>Loading...</p>
{:then}
	{#each images as image}
		<Image src={image} />
	{/each}
{/await}
