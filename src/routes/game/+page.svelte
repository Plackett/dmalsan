<script>
	import TitleScreen from './Title.svelte';
	import Scenario from './Scenario.svelte';
	import Results from './Results.svelte';
	import { scenarios } from './flowData.js';

	let screen = 'title';
	let currentScenarioIndex = 0;
	let decisions = [];
	let reflections = [];
	let selectedIndex = 0;

	function startGame() {
		screen = 'scenario';
		currentScenarioIndex = 0;
		decisions = [];
		reflections = [];
	}

	function saveDecision(selectedIndex) {
		const decisionText = scenarios[currentScenarioIndex].decisions[selectedIndex];
		const reflectionText = scenarios[currentScenarioIndex].reflections[selectedIndex];
		decisions = [...decisions, decisionText];
		reflections = [...reflections, reflectionText];
	}

	function nextScenario() {
		if (currentScenarioIndex < scenarios.length - 1) {
			currentScenarioIndex++;
		} else {
			screen = 'results';
		}
	}
</script>

<main>
	{#if screen === 'title'}
		<TitleScreen {startGame} />
	{/if}
	{#if screen === 'scenario'}
		<Scenario scenario={scenarios[currentScenarioIndex]} {saveDecision} {nextScenario} />
	{/if}
	{#if screen === 'results'}
		<Results {decisions} {reflections} />
	{/if}
</main>
