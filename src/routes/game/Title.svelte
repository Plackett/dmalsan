<script>
    export let startGame;
  </script>
  
  <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-green-400 text-white">
    <h1 class="text-4xl md:text-6xl font-bold mb-8">Self-Driving Car Ethics Quest</h1>
    <button
      on:click={startGame}
      class="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition">
      Start Game
    </button>
  </div>
  