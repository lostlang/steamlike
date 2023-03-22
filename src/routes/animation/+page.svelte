<script lang="ts">
	import Image from "$lib/components/image.svelte";

	let images: string[] = [];
	let randomGrid: string[][] = [];

	function randomInList() {
		return images[Math.floor(Math.random() * images.length)];
	}

	async function loadImage() {
		const response = await fetch("/api/getImages");
		images = await response.json();
	}

	function genetateRandomList(size: number) {
		let list = [];

		for (let i = 0; i < size; i++) {
			list.push(randomInList());
		}

		return list;
	}

	async function main() {
		await loadImage();
		for (let i = 0; i < 15; i++) {
			randomGrid.push(genetateRandomList(22));
		}
	}

	function swapImage(chance: number) {
		for (let i = 0; i < randomGrid.length; i++) {
			for (let j = 0; j < randomGrid[i].length; j++) {
				if (Math.random() < chance) {
					randomGrid[i][j] = randomInList();
				}
				return
			}
		}
	}

	setInterval(() => {
		swapImage(0.1);
	}, 1000);
</script>

<svelte:head>
	<title>Animation</title>
</svelte:head>

<div id="container">
	<div id="image-grid">
		{#await main()}
			<p>Loading...</p>
		{:then}
			{#each randomGrid as line}
				<div class="line">
					{#each line as image}
						<Image src={image} />
					{/each}
				</div>
			{/each}
		{/await}
	</div>
</div>

<style>
	#container {
		background-color: rgb(17, 18, 29);
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: -1;

		overflow: hidden;
	}

	#image-grid {
		height: 2000px;
		width: 6000px;
		transform: rotate(-45deg);
		position: relative;
		left: -2600px;
	}

	.line {
		position: relative;
		left: -50px;
		margin-top: -50px;
		margin-bottom: 50px;
		animation-name: move_even;
		animation-duration: 15s;
		animation-delay: 2s;
		animation-iteration-count: infinite;
	}

	.line:nth-of-type(odd) {
		left: -185px;
		animation-duration: 16s;
		animation-delay: 1s;
		animation-timing-function: cubic-bezier(0.5, -1, 0.2, -1);
		animation-name: move_odd;
	}

	@keyframes move_odd {
		0% {
			transform: translate(0px, 0px);
		}
		50% {
			transform: translate(500px, 0px);
		}
	}

	@keyframes move_even {
		0% {
			transform: translate(0px, 0px);
		}
		25% {
			transform: translate(-500px, 0px);
		}
		75% {
			transform: translate(500px, 0px);
		}
	}
</style>
