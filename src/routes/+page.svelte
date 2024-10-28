<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import Portrait2023 from "$lib/images/portrait2023.jpg";

	let scrollY = 0;
	let imageStyle = '';

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
			updateImageStyle();
		};

		window.addEventListener('scroll', handleScroll);
		updateImageStyle();
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function updateImageStyle() {
		const opacity = Math.max(0, 1 - scrollY / 500);
		const translateY = -scrollY * 0.5;
		imageStyle = `transform: translateY(${translateY}px); opacity: ${opacity};`;
	}
</script>

<section class="w-full h-full font-mono" style="height: 200vh">
	<img
		id="me"
		class="float-right w-96 h-auto shadow-slate-700 shadow-xl rounded-md"
		src={Portrait2023}
		alt="This is a picture of my face"
		style={imageStyle}
	/>
	<div class="mr-20">
		<h1 class="text-2xl">
			John-Nicholas (Niko) Krinos
		</h1>
		<h2>
			Aspiring software developer @ FSU
		</h2>
		<h3 class="text-slate-500">
			krinos@cs.fsu.edu
		</h3>
		<p class="pr-10">This website will serve as my portfolio and will be updated as I work on more projects!</p>
		<h1 class="text-2xl pt-20">Latest Projects:</h1>
	</div>
</section>

<style>
	section {
		color:black;
		object-fit:contain;
		@apply dark:text-[rgb(228,229,241)]
	}

	img {
		transition: opacity 0.3s, transform 0.3s;
	}

</style>
