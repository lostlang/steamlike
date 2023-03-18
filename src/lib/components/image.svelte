<script lang="ts">
	export let src: string;
	export let style: string = random_animation(5);
	export let border: string = random_border(5);
	export let rotate: string = "0deg";

	function random_animation(max: number) {
		let type_image = Math.floor(Math.random() * max);
		if (type_image === max - 1) {
			return "light";
		} else if (type_image === 0) {
			return "dark";
		} else {
			return "default";
		}
	}

	function random_border(max: number) {
		let type_image = Math.floor(Math.random() * max);
		if (type_image === max - 1) {
			return "light_border";
		} else {
			return "dark_border";
		}
	}
</script>

<img
	{src}
	class="{style} {border}"
	alt="Game image"
	style="transform:rotate({rotate})"
/>

<style>
	img {
		margin: 0.5rem;
		border: 0.5rem solid;
		border-radius: 0.5rem;
		width: 230px;
		animation-name: brightness_default;
		animation-duration: 5s;
		animation-iteration-count: infinite;
	}

	.light {
		filter: brightness(1.5);
		animation-name: brightness_light;
	}

	.dark {
		filter: brightness(0.5);
		animation-name: brightness_dark;
	}

	.light_border {
		border-color: rgb(108, 111, 147);
	}

	.dark_border {
		border-color: rgb(22, 24, 33);
	}

	@keyframes brightness_light {
		0% {
			filter: brightness(1.5);
		}
		25% {
			filter: brightness(1);
		}
		50% {
			filter: brightness(0.5);
		}
		75% {
			filter: brightness(1);
		}
		100% {
			filter: brightness(1.5);
		}
	}

	@keyframes brightness_default {
		0% {
			filter: brightness(1);
		}
		25% {
			filter: brightness(1.5);
		}
		50% {
			filter: brightness(1);
		}
		75% {
			filter: brightness(0.5);
		}
		100% {
			filter: brightness(1);
		}
	}

	@keyframes brightness_dark {
		0% {
			filter: brightness(0.5);
		}
		25% {
			filter: brightness(1);
		}
		50% {
			filter: brightness(1.5);
		}
		75% {
			filter: brightness(1);
		}
		100% {
			filter: brightness(0.5);
		}
	}
</style>
