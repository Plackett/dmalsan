<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="w-screen sticky backdrop-blur-sm font-sans font-medium">
	<nav class="w-full">
		<ul class="w-full">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/#About' ? 'page' : undefined}>
				<a href="/About">About Me</a>
			</li>
			<li aria-current={$page.url.pathname === '/Projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
			<li aria-current={$page.url.pathname === '/Reflection' ? 'page' : undefined}>
				<a href="/Reflection">Reflection</a>
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
		@apply dark:text-[#eee]
	}

	nav a {
		align-items: center;
		padding: 0 0.5rem;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
