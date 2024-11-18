<script>
    import TitleScreen from './Title.svelte';
    import Scenario from './Scenario.svelte';
    import Results from './Results.svelte';
    import { scenarios } from './flowData.js';
  
    let screen = 'title';
    let currentScenarioIndex = 0;
    /**
	 * @type {any[]}
	 */
    let decisions = [];
  
    function startGame() {
      screen = 'scenario';
      currentScenarioIndex = 0;
      decisions = [];
    }
  
    /**
	 * @param {number} selectedIndex
	 */
    function saveDecision(selectedIndex) {
      const decisionText = scenarios[currentScenarioIndex].decisions[selectedIndex] || 'No decision made';
      decisions = [...decisions, decisionText];
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
    <TitleScreen startGame={startGame} />
  {/if}
  {#if screen === 'scenario'}
    <Scenario
      scenario={scenarios[currentScenarioIndex]}
      saveDecision={saveDecision}
      nextScenario={nextScenario} />
  {/if}
  {#if screen === 'results'}
    <Results decisions={decisions} />
  {/if}
</main>