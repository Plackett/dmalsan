<script>
	// this works just like header declaration in C++
	export let scenario; // Current scenario data
	export let saveDecision; // Function to save the user's decision
	export let nextScenario; // Function to move to the next scenario

	import Icon from '@iconify/svelte';
	let selectedDecision = 0;
</script>

<div
	class="flex min-h-screen w-[52rem] flex-col items-center justify-center rounded-2xl bg-gray-50 p-6"
>
	<h2 class="mb-6 text-center text-2xl font-semibold md:text-4xl">
		{scenario.level}
	</h2>

	<!-- Animation Placeholder -->
	<div class="h-128 mb-6 flex w-full items-center justify-center rounded-md bg-blue-100">
		<img
			src={scenario.animation}
			alt="A car with the stated automation level is about to hit a cat on the road!"
		/>
	</div>

	<!-- Decision Options -->
	<div class="flex flex-row space-y-4">
		{#each scenario.decisions as decision, index}
			{#if selectedDecision === index}
				<button
					class="w-full rounded-lg bg-purple-200 p-4 shadow transition hover:bg-purple-300"
					class:selected={selectedDecision === index}
					on:click={() => (selectedDecision = index)}
				>
					{decision}
				</button>
			{:else}
				<button
					class="w-full rounded-lg bg-gray-100 p-4 shadow transition hover:bg-gray-200"
					class:selected={selectedDecision === index}
					on:click={() => (selectedDecision = index)}
				>
					{decision}
				</button>
			{/if}
		{/each}
	</div>

	<!-- Next Button -->
	<button
		on:click={() => {
			saveDecision(selectedDecision);
			nextScenario();
		}}
		class="mt-6 rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:bg-blue-600"
		disabled={selectedDecision === null}
	>
		Next Level
	</button>
</div>
