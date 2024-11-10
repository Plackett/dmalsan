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
		<img alt="Portrait of me" class="absolute rounded-2xl rotate-6 w-48 brightness-50 hover:brightness-100" src="https://dmalsan.com/ENC2135/images/portrait2023.jpg">
	</a>
	<!-- svelte-ignore a11y_img_redundant_alt -->
	<img alt="Car Crash photo" class ="absolute right-20 rounded-3xl transition-opacity duration-300 -rotate-6 w-80 opacity-0 hover:opacity-100" src="https://dmalsan.com/ENC2135/images/accident.jpg">
	<p>Image by <a href="https://pixabay.com/users/queven-1980457/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4858593">Romy</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4858593">Pixabay</a></p>
	<img alt="Self-Driving Car" class ="absolute right-20 rounded-3xl -rotate-6 w-80 transition-opacity duration-300 opacity-100 hover:opacity-0"src="https://dmalsan.com/ENC2135/images/self-driving.jpg">
	<p>Image by <a href="https://pixabay.com/users/julientromeur-3630051/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4309836">Julien Tromeur</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4309836">Pixabay</a></p>
	<img alt="Car rearview window reflection" class=" absolute bottom-10 rounded-lg rotate-6 w-64" src="https://dmalsan.com/ENC2135/images/rearview-mirror.jpg">
</section>

<style>
	#homepage {
		background-image: url(https://dmalsan.com/ENC2135/images/road.svg);
		background-size: contain;
		background-repeat: no-repeat;
	}
</style>
