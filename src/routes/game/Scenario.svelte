<script>
	// this works just like header declaration in C++
	export let scenario; // Current scenario data
	export let saveDecision; // Function to save the user's decision
	export let nextScenario; // Function to move to the next scenario

	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	let selectedDecision = 0;

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let canvas;
  var carSprite = new Image();
  carSprite.src = "./car.svg";
  let speed = 0;
  let angle = 0;

  window.addEventListener("keydown", function (event) {
      if (event.defaultPrevented) {
        return;
      }

      switch (event.key) {
        case "ArrowDown":
          speed += 0.1;
          break;
        case "ArrowUp":
          speed -= 0.1;
          break;
        case "ArrowLeft":
          angle += 0.1;
          break;
        case "ArrowRight":
          angle -= 0.1;
          break;
        default:
          return;
      }

      event.preventDefault();
  }, true);

  onMount(() =>
  {
    const ctx = canvas.getContext("2d");

    function resetCanvas()
    {
      ctx.clearRect(0,0,600,600);
    }

    function drawRoad()
    {
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(200,605);
      ctx.lineTo(220,100);
      ctx.lineTo(380,100);
      ctx.lineTo(400,605);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0,100);
      ctx.lineTo(600,100);
      ctx.closePath();
      ctx.stroke();
    }

    function drawRoadLine()
    {
      ctx.lineWidth = 5;
      ctx.setLineDash([40, 20]);
      ctx.lineDashOffset = -offset;
      ctx.beginPath();
      ctx.moveTo(300, 600);
      ctx.lineTo(300, 100);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function drawCar(a)
    {
      ctx.save();
      ctx.translate(220, 400);
      ctx.rotate(a);
      ctx.translate(0,0);
      ctx.drawImage(carSprite,0,0);
      ctx.restore();
    }

    let offset = 0;

    function updateGame()
    {
      resetCanvas();
      drawRoad();
      drawRoadLine(offset);
      drawCar(angle);
      offset = (offset + speed) % 60;
      // natural deceleration
      if(speed > 0) speed -= 0.001;
      requestAnimationFrame(updateGame);
    }

    updateGame();
  });
</script>

<div
	class="flex min-h-screen w-[52rem] flex-col items-center justify-center rounded-2xl bg-gray-50 p-6"
>
	<canvas id="canvasgame" bind:this={canvas} width=600px height=600px></canvas>

	
</div>
