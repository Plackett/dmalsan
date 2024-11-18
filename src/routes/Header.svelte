<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<header class="sticky flex w-screen flex-row font-sans font-medium backdrop-blur-sm">
	<nav class="w-full">
		<ul class="w-full">
			<li>
				<a href="https://calendar.app.google/E9t5gvJG9G32rg2R9">
					<Icon class="color-[#eee] transition: color 0.2s linear; h-7 w-7" icon="mdi:tea" />
					Schedule a meetup!
				</a>
			</li>
			<li aria-current={$page.url.pathname.endsWith('/') ? 'page' : undefined}>
				<a href="./">Home</a>
			</li>
			<li aria-current={$page.url.pathname.endsWith('/about') ? 'page' : undefined}>
				<a href="./about">About Me</a>
			</li>
			<li aria-current={$page.url.pathname.endsWith('/projects') ? 'page' : undefined}>
				<a href="./projects">Projects</a>
			</li>
			<li aria-current={$page.url.pathname.endsWith('/reflection') ? 'page' : undefined}>
				<a href="./reflection">Reflection</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		overflow: visible;
		z-index: 9;
		justify-content: space-between;
		top: 0;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	a {
		display: flex;
		height: 100%;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		@apply dark:text-[#eee];
	}

	nav a {
		align-items: center;
		padding: 0 0.5rem;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
