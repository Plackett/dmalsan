<script>
	import TitleScreen from './Title.svelte';
	import Scenario from './Scenario.svelte';

	let screen = 'title';

	let title = 'The Cat Conjecture';

	function startGame() {
		screen = 'scenario';
		currentScenarioIndex = 0;
		decisions = [];
		reflections = [];
	}
</script>

<main>
	{#if screen === 'title'}
		<TitleScreen {startGame} />
	{/if}
	{#if screen === 'scenario'}
		<Scenario />
	{/if}
</main>
