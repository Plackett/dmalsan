<script>
	export let decisions;
	export let reflections;
</script>

<div
	class="flex min-h-screen max-w-[52rem] flex-col items-center justify-center rounded-2xl bg-gray-50 p-6"
>
	<h2 class="mb-6 text-center text-2xl font-semibold md:text-4xl">Your Choices Summary</h2>
	<ul class="space-y-4">
		{#each decisions as decision, index}
			<li class="rounded-lg bg-gray-100 p-4 text-black shadow">
				<strong>Level {index + 1}:</strong>
				{decision}
				<p class="text-black">Reflection:</p>
				{reflections[index]}
			</li>
		{/each}
	</ul>
	<a
		href="./game.html"
		data-sveltekit-reload
		class="mt-6 rounded bg-green-500 px-4 py-2 font-bold text-white transition hover:bg-green-600"
	>
		Restart Game
	</a>
</div>
