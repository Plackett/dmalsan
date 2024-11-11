<svelte:head>
	<title>Home</title>
	<meta name="description" content="Niko Krinos portfolio website" />
</svelte:head>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
</script>

<section id="homepage" class="w-full h-full font-serif flex-wrap">
	<h1 class="text-2xl">John-Nicholas (Niko) Krinos</h1>
	<p>Hi! I'm Niko and this is my last project for ENC2135</p>
	<a href="./about">
		<img alt="Portrait of me" class="absolute rounded-2xl rotate-6 w-48 brightness-50 hover:brightness-100 transition-all duration-300" src="https://dmalsan.com/ENC2135/images/portrait2023.jpg">
	</a>
	<!-- svelte-ignore a11y_img_redundant_alt -->
	<div>
		<img alt="Car Crash photo" class ="absolute right-20 rounded-3xl transition-opacity duration-300 -rotate-6 w-80 opacity-0 group-hover:opacity-100" src="https://dmalsan.com/ENC2135/images/accident.jpg">
		<img alt="Self-Driving Car" class ="absolute right-20 rounded-3xl -rotate-6 w-80 transition-opacity duration-300 opacity-100 group-hover:opacity-0"src="https://dmalsan.com/ENC2135/images/self-driving.jpg">
	</div>
	<img alt="Car rearview window reflection" class=" absolute bottom-10 rounded-lg rotate-6 w-64" src="https://dmalsan.com/ENC2135/images/rearview-mirror.jpg">
</section>

<style>
	#homepage {
		background-image: url(https://dmalsan.com/ENC2135/images/road.svg);
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>
