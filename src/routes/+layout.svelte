<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import { elasticIn, linear } from 'svelte/easing';
	import ViewTransition from './navigation.svelte';

	const slideParams = {
        duration: 1000,
        easing: linear,
        axis: "x"
    };
</script>

<div class="app">
	<div id="Home" ></div>
	<ViewTransition/>
	<Header />
	<main>
		<slot/>
	</main>
	<footer class="flex gap-2">
		<p>Developed using <a href="https://svelte.dev/">Sveltekit</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a> | </p>
		<a href="mailto:krinos@cs.fsu.edu">Contact</a>
  		<a href="https://www.github.com/Plackett/dmalsan">Source</a>
  		<p>&copy; Niko Krinos 2024</p>
  		<a href="https://github.com/Plackett/dmalsan/blob/617d734b9e12f545b36ab11cfa68a6c9788ddaba/LICENSE.md">MIT License</a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
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
