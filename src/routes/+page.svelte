<svelte:head>
	<title>Home</title>
	<meta name="description" content="Niko Krinos portfolio website" />
</svelte:head>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
</script>

<section class="w-full h-full font-serif flex-wrap grid grid-rows-2 grid-cols-3">
	<h1 class="text-2xl">John-Nicholas (Niko) Krinos</h1>
	<p>Hi! I'm Niko and this is my last project for ENC2135</p>
	<img alt="Portrait of me" class="rounded-2xl rotate-6 w-48" src="https://dmalsan.com/images/portrait2023.jpg">
	<!-- svelte-ignore a11y_img_redundant_alt -->
	<img alt="Car Crash photo" src="https://dmalsan.com/images/car-crash.jpg">
	<p>Image by <a href="https://pixabay.com/users/queven-1980457/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4858593">Romy</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4858593">Pixabay</a></p>
	<img alt="Self-Driving Car" src="https://dmalsan.com/images/self-driving.jpg">
	<p>Image by <a href="https://pixabay.com/users/julientromeur-3630051/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4309836">Julien Tromeur</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4309836">Pixabay</a></p>
</section>

<style>
	
</style>
