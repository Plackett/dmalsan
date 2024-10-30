<svelte:head>
	<title>Home</title>
	<meta name="description" content="Niko Krinos portfolio website" />
</svelte:head>

<script lang="ts">
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

	type Item = {
        name: string,
        from: Date,
        until: Date,
        role: string,
        description: string,
        pills: string[],
        link: null | {href: string, text: string}
    }

	const data: Item[] = [
        {
            name: "Lyrics2go",
            from: new Date("September 1, 2024"),
            until: new Date("November 1, 2024"),
            role: "Code Education - Project Manager",
            description: "We created a mobile app for iOS and Android using React Native on the Expo Framework that can display the lyrics to any song recognized by the MusicBrainz API. This project lasted for four sprints, with the last sprint dedicated to producing a presentation describing the app.",
            pills: ["Git", "Github", "React Native", "Mobile Application Development"],
            link: {
                href: "https://github.com/Plackett/Lyrics2go-fall2024",
                text: "View the Lyrics2go repository on Github"
            }
        },
        {
            name: "Wizterria",
            from: new Date("August 1, 2023"),
            until: new Date("May 1, 2024"),
            role: "Programming Director",
            description: "Developed as a video game using C++ with SDL 3.0, Wizterria offers an engaging interactive experience.",
            pills: ["C++", "SDL 3.0", "Game Development", "Team Collaboration"],
            link: {
                href: "https://sites.google.com/view/wizterria/home",
                text: "Visit the Wizterria project site"
            }
        },
        {
            name: "Six Degrees",
            from: new Date("August 1, 2020"),
            until: new Date("June 1, 2021"),
            role: "Front-End Developer",
            description: "With a team of two other students, we created a mobile app for iOS and Android using Dart on the Flutter framework. We placed 10th nationally at the Future Business Leaders of America National Leadership Conference for the 2020-2021 school year.",
            pills: ["Dart", "Flutter", "Mobile Application Development"],
            link: null
        }
    ]
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
	<div class="mr-20">
			<div class=" mt-1 flex flex-row min-w-32">
				<h1 class="text-2xl">John-Nicholas (Niko) Krinos </h1>
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
		<p class="pr-10">This website is my continually updated portfolio!</p>
		<h1 id="About" class="text-2xl pt-2">About Me</h1>
		<p class="mb-1">My name is Niko Krinos and I was born in Tampa, Florida. I started off programming with Python 2.7 and Scratch when I was about ten years old but found myself liking Lua and C++ much better.</p>
		<p class="mb-1">Following this I started playing Minecraft and wanted to make custom modifications or mods for the game so I taught myself Java and wrote a couple <a href="https://github.com/Plackett/springnions">mods.</a></p>
		<p class="mb-1">Since then I have entered multiple programming competitions and <a href="https://plackett.itch.io">game jams</a> - game design projects that have tight deadlines.</p>
		<p class="mb-1">After attending a game design magnet in high school and competiting my <a href="https://sites.google.com/view/wizterria/home">capstone project</a> I realized that the game design field was not for me. Nowadays I love writing general purpose software and I currently have a passion project I've been working on in the background while I complete my degree at FSU.</p>
		<div class="flex flex-col justify-end">
			<h1 class="text-2xl text-left" id="Projects">Latest Projects:</h1>
			<div class="grid grid-cols-[2fr,minmax(1px,9fr)] gap-x-[1px] dark:bg-slate-100 bg-black w-full">
				{#each data as item}
					<div class="dark:bg-[#1f1f1f] bg-[rgb(255,253,251)] p-3">
						<p class="text-right relative">
							{item.from.toLocaleDateString()} - {item.until.toLocaleDateString()}
							<span class='rounded-full w-2 h-2 dark:bg-slate-100 bg-black absolute -right-4 top-2'>
							</span>
						</p>
					</div>
					{#if item.link != null}
						<a href="{item.link.href}">
							<div class="flex flex-col dark:hover:bg-[#474747] hover:bg-slate-300 dark:bg-[#1f1f1f] bg-[rgb(255,253,251)] p-3">
								<div class="pillbottle">
									<h2 class="text-xl pt-5">{item.name}</h2>
									<Icon icon="solar:arrow-right-up-linear" class="w-4 h-4 mt-5"/>
								</div>
								<h3 class="text-md text-neutral-700">{item.role}</h3>
								<p class="mb-2">{item.description}</p>
								<div class="pillbottle">
								{#each item.pills as pill}
									<div class="pill">
										{pill}
									</div>
								{/each}
								</div>
							</div>
						</a>
					{:else}
					<div class="flex flex-col dark:hover:bg-[#474747] hover:bg-slate-300 dark:bg-[#1f1f1f] bg-[rgb(255,253,251)] p-3">
						<div class="pillbottle">
							<h2 class="text-xl pt-5">{item.name}</h2>
						</div>
						<h3 class="text-md text-neutral-700">{item.role}</h3>
						<p class="mb-2">{item.description}</p>
						<div class="pillbottle">
						{#each item.pills as pill}
							<div class="pill">
								{pill}
							</div>
						{/each}
						</div>
					</div>
				{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		color:black;
		object-fit:contain;
		@apply dark:text-[rgb(228,229,241)]
	}

	.pillbottle {
		@apply flex flex-row flex-wrap gap-y-1
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
