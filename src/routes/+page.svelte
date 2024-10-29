<svelte:head>
	<title>Home</title>
	<meta name="description" content="Niko Krinos portfolio website" />
</svelte:head>

<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

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
		imageStyle = `opacity: ${opacity};`;
	}
</script>

<section class="w-full h-full font-mono flex-wrap">
	<!-- svelte-ignore a11y_img_redundant_alt -->
	<img
		id="me"
		class="float-right w-96 h-auto ml-10 shadow-slate-700 shadow-xl rounded-md mb-10"
		src="./images/portrait2023.jpg"
		alt="This is a picture of my face"
		style={imageStyle}
	/>
	<div class="mr-20 ">
			<div class=" mt-1 flex flex-row">
				<h1 class="text-2xl">John-Nicholas (Niko) Krinos</h1>
				<a aria-label="Github" href="https://github.com/Plackett/" class="pl-0 pr-0 icon">
					<Icon icon="mdi:github" class="w-8 h-8"/>
				</a>
				<a aria-label="LinkedIn" href="https://www.linkedin.com/in/niko-krinos-67aa99219/" class="pl-0 pr-0 icon">
					<Icon icon="mdi:linkedin" class="w-8 h-8"/>
				</a>
			</div>
		<h2>
			Aspiring software developer and undergraduate student majoring in Computer Science @ FSU in the University Honors Program
		</h2>
		<a href="mailto:krinos@cs.fsu.edu">
			krinos@cs.fsu.edu
		</a>
		<p class="pr-10">This website will serve as my portfolio and will be updated as I work on more projects!</p>
		<h1 class="text-2xl pt-20">Latest Projects:</h1>
		<ol class="relative border-s border-gray-200 dark:border-gray-700 list-disc"> 
			<li class="list-image-[url(`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19.1 8.7c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3M14 1H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m0 19H4V4h10z'/%3E%3C/svg%3E)`]">
				<h1>Sep 2024 - Nov 2024</h1>
				<a href="https://github.com/Plackett/Lyrics2go-fall2024" target="_blank" rel="noopener noreferrer">
					<div class="pillbottle">
						<h2 class="text-xl pt-5">Lyrics2go</h2>
						<Icon icon="solar:arrow-right-up-linear" class="w-4 h-4 mt-5"/>
					</div>
					<p><strong>Code Education - Project Manager</strong></p>
					<p>We created a mobile app for iOS and Android using React Native on the Expo Framework that can display the lyrics to any song recognized by the MusicBrainz API. This project lasted for four sprints, with the last sprint dedicated to producing a presentation describing the app.</p>
					<div class="pillbottle">
						<span class="pill">Git</span>
						<span class="pill">GitHub</span>
						<span class="pill">React Native</span>
						<span class="pill">Mobile Application Development</span>
					</div>
				</a>
			</li>
			<li>
				<h1>Aug 2023 - May 2024</h1>
				<a href="https://sites.google.com/view/wizterria/home" target="_blank" rel="noopener noreferrer">
					<div class="pillbottle">
						<h2 class="text-xl pt-5">Wizterria</h2>
						<Icon icon="solar:arrow-right-up-linear" class="w-4 h-4 mt-5"/>
					</div>
					<p><strong>Programming Director</strong></p>
					<p>Developed as a video game using C++ with SDL 3.0, Wizterria offers an engaging interactive experience.</p>
					<div class="pillbottle">
						<span class="pill">C++</span>
						<span class="pill">SDL 3.0</span>
						<span class="pill">Game Development</span>
						<span class="pill">Team Collaboration</span>
					</div>
				</a>
			</li>
			<li>
				<h1>Aug 2020 - Jun 2021</h1>
				<h2 class="text-xl pt-5">Six Degrees</h2>
				<p><strong>Front-End Developer</strong></p>
				<p>With a team of two other students, we created a mobile app for iOS and Android using Dart on the Flutter framework. We placed 10th nationally at the Future Business Leaders of America National Leadership Conference for the 2020-2021 school year.</p>
				<div class="pillbottle">
					<span class="pill">Dart</span>
					<span class="pill">Flutter</span>
					<span class="pill">Mobile Application Development</span>
				</div>
			</li>
		</ol>
	</div>
</section>

<style>
	section {
		color:black;
		object-fit:contain;
		@apply dark:text-[rgb(228,229,241)]
	}

	.pillbottle {
		@apply flex flex-row
	}

	.pill {
		@apply rounded-full text-[rgb(50,119,255)] bg-[rgb(163,192,250)] dark:bg-[rgba(50,119,255,0.5)] dark:text-[rgb(163,192,250)] pl-2 pr-2 mr-1
	}

	img {
		transition: opacity 0.4s, transform 0.4s;
	}

	div {
		transition: transform 1.0s;
	}

	.icon {
		color: rgba(0, 0, 0, 0.7);
		@apply dark:text-[#eee];
		transition: color 0.2s linear;
	}

	.icon:hover {
		color: rgb(50,119,255);
	}

</style>
