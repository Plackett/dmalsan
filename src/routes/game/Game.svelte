<script lang="ts">
    import { onMount } from 'svelte';
  
    let game;
  
    onMount(async () => {
      // Ensure Phaser is only imported in the browser
      if (typeof window !== 'undefined') {
        const Phaser = (await import('phaser')).default;
  
        const config = {
          type: Phaser.AUTO,
          width: 800,
          height: 600,
          parent: 'game-container',
          scene: {
            preload,
            create,
            update
          }
        };
  
        // Initialize Phaser game instance
        game = new Phaser.Game(config);
      }
  
      // Clean up Phaser instance when component unmounts
      return () => {
        if (game) game.destroy(true);
      };
    });
  
    function preload() {
      this.load.image('road', '/road.png');    // Ensure these assets are in the static folder
      this.load.image('car', '/car.png');
    }
  
    function create() {
      this.add.tileSprite(400, 300, 800, 600, 'road');
      const car = this.add.sprite(400, 500, 'car');
  
      this.input.keyboard.on('keydown-LEFT', () => car.x -= 10);
      this.input.keyboard.on('keydown-RIGHT', () => car.x += 10);
    }
  
    function update() {}
  </script>
  
  <div id="game-container" style="width: 800px; height: 600px; margin: auto;"></div>
  
  <style>
    #game-container {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #333;
    }
  </style>
  