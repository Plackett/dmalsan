<svelte:head>
	<title>Home</title>
	<meta name="description" content="Niko Krinos portfolio website" />
</svelte:head>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
</script>

<section id="homepage" class="w-full h-full font-serif">
	<h1 class="text-2xl absolute top-5 left-5">John-Nicholas (Niko) Krinos</h1>
	<p class="absolute top-16 left-5">Hi! I'm Niko and this is my last project for ENC2135</p>

	<!-- Image 1 - Portrait (Top left, near name) -->
	<a href="./about" class="relative z-10">
		<img alt="Portrait of me" class="road-image rounded-2xl rotate-6 w-48 min-w-12 brightness-50 hover:brightness-100 transition-all duration-300" src="https://dmalsan.com/ENC2135/images/portrait2023.jpg">
	</a>

	<!-- Image 2 - Car Crash / Self Driving Car Toggle (Link to ./projects) -->
	<a href="./projects" class="relative z-10">
		<div class="relative">
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img alt="Car Crash photo" class="road-image right-5 top-1/2 transform -translate-y-1/2 rounded-3xl transition-opacity duration-300 opacity-0 hover:opacity-100 absolute w-80 min-w-[320px]" src="https://dmalsan.com/ENC2135/images/accident.jpg">
			<img alt="Self-Driving Car" class="road-image right-5 top-1/2 transform -translate-y-1/2 rounded-3xl -rotate-6 w-80 min-w-[320px] transition-opacity duration-300 opacity-100 hover:opacity-0 absolute" src="https://dmalsan.com/ENC2135/images/self-driving.jpg">
		</div>
	</a>

	<!-- Image 3 - Rearview Mirror (Link to ./reflection, positioned bottom left) -->
	<a href="./reflection" class="relative z-10">
		<img alt="Car rearview window reflection" class="road-image absolute bottom-5 left-5 rounded-lg rotate-6 w-64 min-w-[256px]" src="https://dmalsan.com/ENC2135/images/rearview-mirror.jpg">
	</a>
</section>

<style>
	#homepage {
		background-image: url(https://dmalsan.com/ENC2135/images/road.svg);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center center;
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* General class for images that will align with the road */
	.road-image {
		position: absolute;
		transition: all 0.3s ease-in-out;
		min-width: 160px;
	}

	/* Image 1 - Portrait (Top left near name) */
	#homepage img:nth-child(1) { 
		top: 10%; 
		left: 5%;
		z-index: 10;
	}

	/* Image 2 - Car Crash / Self Driving Car Toggle (Middle Right) */
	#homepage img:nth-child(2) {
		top: 50%;
		right: 5%;
		transform: translate(0, -50%);
		z-index: 10;
	}

	/* Image 3 - Rearview Mirror (Bottom Left) */
	#homepage img:nth-child(3) {
		bottom: 5%;
		left: 5%;
		z-index: 10;
	}

	@media (max-width: 768px) {
		#homepage img:nth-child(1) {
			top: 5%;
			left: 5%;
		}
		#homepage img:nth-child(2) {
			top: 40%;
			right: 5%;
			width: 60%;
		}
		#homepage img:nth-child(3) {
			bottom: 5%;
			left: 5%;
			width: 50%;
		}
	}

	.road-image:hover {
		transform: scale(1.1);
	}
</style>
