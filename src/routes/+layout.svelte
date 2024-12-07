<script lang="ts">
	import Header from './Header.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import { elasticIn, linear } from 'svelte/easing';
	import ViewTransition from './navigation.svelte';
	import { Drawer, Sidebar } from 'flowbite-svelte';
	import { SidebarGroup } from 'flowbite-svelte';
	import { SidebarItem } from 'flowbite-svelte';
	import { SidebarWrapper } from 'flowbite-svelte';

	const slideParams = {
		duration: 1000,
		easing: linear,
		axis: 'x'
	};

	let title = "Home";
</script>

<div class="app max-w-screen min-h-screen">
	<!--<ViewTransition />-->
	<Header />
	<main class="flex h-full w-full flex-col items-center justify-center overflow-y-auto p-4">
		<slot />
	</main>
	<footer class="flex flex-wrap justify-center gap-4 py-6 text-center text-sm dark:bg-gray-900 dark:text-gray-300">
		<p>
			Built with <a href="https://svelte.dev/" class="text-blue-500 hover:underline">SvelteKit</a> &
			<a href="https://tailwindcss.com/" class="text-blue-500 hover:underline">Tailwind CSS</a>
		</p>
		<a href="mailto:krinos@cs.fsu.edu" class="hover:underline">
			📧 Contact
		</a>
		<a href="https://github.com/Plackett/dmalsan" class="hover:underline">
			🐙 Source
		</a>
		<p>&copy; 2024 Niko Krinos</p>
		<a
			href="https://github.com/Plackett/dmalsan/blob/617d734b9e12f545b36ab11cfa68a6c9788ddaba/LICENSE.md"
			class="hover:underline"
		>
			📜 MIT License
		</a>
	</footer>
	
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
