<script>
    // this works just like header declaration in C++
    export let scenario; // Current scenario data
    export let saveDecision; // Function to save the user's decision
    export let nextScenario; // Function to move to the next scenario
  
    import Icon from "@iconify/svelte";
    let selectedDecision = 0;
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
    <h2 class="text-2xl md:text-4xl font-semibold mb-6 text-center">
      {scenario.level}
    </h2>
  
    <!-- Animation Placeholder -->
    <div class="w-full h-64 bg-blue-100 rounded-md flex items-center justify-center mb-6">
      <p>{scenario.animation}</p>
    </div>
  
    <!-- Decision Options -->
    <div class="space-y-4 flex-row flex">
      {#each scenario.decisions as decision, index}
        <button
          class="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition w-full"
          class:selected={selectedDecision === index}
          on:click={() => (selectedDecision = index)}>
          <Icon icon={decision}></Icon>
        </button>
      {/each}
    </div>
  
    <!-- Next Button -->
    <button
      on:click={() => {
        saveDecision(selectedDecision);
        nextScenario();
      }}
      class="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
      disabled={selectedDecision === null}>
      Next Level
    </button>
  </div>
  