<script lang="ts">
	import Header from './Header.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import { elasticIn, linear } from 'svelte/easing';
	import ViewTransition from './navigation.svelte';
	import { Drawer, Sidebar } from 'flowbite-svelte';
	import { SidebarGroup }  from 'flowbite-svelte';
	import { SidebarItem } from 'flowbite-svelte';
	import { SidebarWrapper } from 'flowbite-svelte';

	const slideParams = {
        duration: 1000,
        easing: linear,
        axis: "x"
    };
</script>
<Header />
<div class="app">
	<ViewTransition/>
	<div class="flex flex-col w-full h-screen overflow-clip items-stretch">
		<header class="min-h-16 justify-center flex flex-row"> 
		</header>
		<div class="flex flex-row items-stretch h-full">
		  <aside class="min-w-48 overflow-y-auto flex flex-col gap-2 px-4">

		  </aside>
		  <main class="w-full overflow-y-auto p-4 flex flex-col items-center">
			<slot/>
		  </main>
		</div>
		<footer class="flex gap-2">
			<p>Developed using <a href="https://svelte.dev/">Sveltekit</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a> | </p>
			<a href="mailto:krinos@cs.fsu.edu">Contact</a>
			  <a href="https://www.github.com/Plackett/dmalsan">Source</a>
			  <p>&copy; Niko Krinos 2024</p>
			  <a href="https://github.com/Plackett/dmalsan/blob/617d734b9e12f545b36ab11cfa68a6c9788ddaba/LICENSE.md">MIT License</a>
		</footer>
	</div>
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