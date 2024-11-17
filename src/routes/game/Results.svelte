<script>
    export let decisions;
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
    <h2 class="text-2xl md:text-4xl font-semibold mb-6 text-center">
      Your Choices Summary
    </h2>
    <ul class="space-y-4">
      {#each decisions as decision, index}
        <li class="bg-gray-100 p-4 rounded-lg shadow">
          <strong>Level {index + 1}:</strong> {decision}
        </li>
      {/each}
    </ul>
    <a
      href="/"
      class="mt-6 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition">
      Restart Game
    </a>
  </div>
  