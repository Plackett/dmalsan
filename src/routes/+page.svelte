<svelte:head>
	<title>Home</title>
	<meta name="description" content="Niko Krinos portfolio website" />
</svelte:head>

<script>
	import { onMount } from 'svelte';
	import Portrait2023 from "$lib/images/portrait2023.jpg";

	let scrollY = 0;
	let imageStyle = '';
	let divStyle = '';

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
		divStyle = `transform: translateY(${translateY}px);`;
	}
</script>

<section class="w-full h-full font-mono flex-wrap">
	<img
		id="me"
		class="float-right w-96 h-auto ml-10 shadow-slate-700 shadow-xl rounded-md"
		src={Portrait2023}
		alt="This is a picture of my face"
		style={imageStyle}
	/>
	<div class="mr-20 " style={divStyle}>
		<h1 class="text-2xl">
			John-Nicholas (Niko) Krinos
		</h1>
		<h2>
			Aspiring software developer @ FSU
		</h2>
		<a href="mailto:krinos@cs.fsu.edu">
			krinos@cs.fsu.edu
		</a>
		<p class="pr-10">This website will serve as my portfolio and will be updated as I work on more projects!</p>
		<h1 class="text-2xl pt-20">Latest Projects:</h1>
		
		<h2 class="text-xl pt-5">Lyrics2go</h2>
		<p><strong>Code Education - Project Manager</strong></p>
		<p>Sep 2024 - Nov 2024</p>
		<p>We created a mobile app for iOS and Android using React Native on the Expo Framework that can display the lyrics to any song recognized by the MusicBrainz API. This project lasted for four sprints, with the last sprint dedicated to producing a presentation describing the app.</p>
		<p><strong>Skills:</strong> Git, GitHub, React Native, Mobile Application Development</p>
		<p><a href="https://github.com/Plackett/Lyrics2go-fall2024" target="_blank" rel="noopener noreferrer">View the Lyrics2go repository on GitHub</a></p>

		<h2 class="text-xl pt-5">Six Degrees</h2>
		<p><strong>Front-End Developer</strong></p>
		<p>Aug 2020 - Jun 2021</p>
		<p>With a team of two other students, we created a mobile app for iOS and Android using Dart on the Flutter framework. We placed 10th nationally at the Future Business Leaders of America National Leadership Conference for the 2020-2021 school year.</p>
		<p><strong>Skills:</strong> Dart, Flutter, Mobile Application Development</p>

		<h2 class="text-xl pt-5">Wizterria</h2>
		<p><strong>Programming Director</strong></p>
		<p>Developed as a video game using C++ with SDL 3.0, Wizterria offers an engaging interactive experience.</p>
		<p><strong>Skills:</strong> C++, SDL 3.0, Game Development, Team Collaboration</p>
		<p><a href="https://sites.google.com/view/wizterria/home" target="_blank" rel="noopener noreferrer">Visit the Wizterria project site</a></p>

	</div>
</section>

<style>
	section {
		color:black;
		object-fit:contain;
		@apply dark:text-[rgb(228,229,241)]
	}

	img {
		transition: opacity 0.4s, transform 0.4s;
	}

	div {
		transition: transform 1.0s;
	}

</style>
