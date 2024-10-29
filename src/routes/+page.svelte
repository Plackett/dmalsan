<svelte:head>
	<title>Home</title>
	<meta name="description" content="Niko Krinos portfolio website" />
</svelte:head>

<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import {Timeline, TimelineItem } from 'flowbite-svelte';

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
		<h1 class="text-2xl">
			John-Nicholas (Niko) Krinos
		</h1>
		<h2>
			Aspiring software developer and undergraduate student majoring in Computer Science @ FSU in the University Honors Program
		</h2>
		<a href="mailto:krinos@cs.fsu.edu">
			krinos@cs.fsu.edu
		</a>
		<p class="pr-10">This website will serve as my portfolio and will be updated as I work on more projects!</p>
		<h1 class="text-2xl pt-20">Latest Projects:</h1>
		<Timeline>
			<TimelineItem date="Sep 2024 - Nov 2024">
				<svelte:fragment slot="icon">
      				<span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        				<Icon icon="mdi:smartphone-sound" />
      				</span>
    			</svelte:fragment>
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
			</TimelineItem>
			<TimelineItem date="Aug 2023 - May 2024">
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
			</TimelineItem>
			<TimelineItem date="Aug 2020 - Jun 2021">
				<h2 class="text-xl pt-5">Six Degrees</h2>
				<p><strong>Front-End Developer</strong></p>
				<p>With a team of two other students, we created a mobile app for iOS and Android using Dart on the Flutter framework. We placed 10th nationally at the Future Business Leaders of America National Leadership Conference for the 2020-2021 school year.</p>
				<div class="pillbottle">
					<span class="pill">Dart</span>
					<span class="pill">Flutter</span>
					<span class="pill">Mobile Application Development</span>
				</div>
			</TimelineItem>
		</Timeline>
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

</style>
