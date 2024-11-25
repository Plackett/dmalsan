<script>
	export let startGame;
</script>

<div
	class="flex h-screen max-w-[52rem] flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-green-400 text-white"
>
	<h1 class="mb-8 text-4xl font-bold md:text-6xl">The Cat Conjecture</h1>
	<p>Avoid hitting the cats and try out the different automation levels! ></p>
	<button
		on:click={startGame}
		class="rounded-lg bg-white px-6 py-3 font-bold text-blue-600 shadow-lg transition hover:bg-blue-100"
	>
		Start Game
	</button>
</div>
