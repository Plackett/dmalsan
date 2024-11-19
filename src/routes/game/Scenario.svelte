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
  onMount(() =>
  {
    const ctx = canvas.getContext("2d");
    function resetCanvas()
    {
      ctx.clearRect(0,0,600,600);
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
    resetCanvas();
    ctx.beginPath();
    ctx.setLineDash([20,20]);
    ctx.moveTo(300,605);
    ctx.lineTo(300,100);
    ctx.closePath();
    ctx.stroke();
    // let pos = 0;
    // let loops = 0;
    // var nextGameTick = (new Date).getTime();
    // var startTime = (new Date).getTime();

    // async function roadLines(speed)
    // {
    //   while ((new Date).getTime() > nextGameTick && loops < Game.maxFrameSkip) {
    //         pos = (pos + speed) % 20;
    //         resetCanvas();
    //         ctx.beginPath();
    //         ctx.setLineDash([20,20]);
    //         ctx.moveTo(300,605+pos);
    //         ctx.lineTo(300,100);
    //         ctx.closePath();
    //         ctx.stroke();
    //         ctx.setLineSolid();
    //         nextGameTick += Game.skipTicks;
    //         loops++;
    //     }
    // }
    // roadLines(1);
  });
</script>

<div
	class="flex min-h-screen w-[52rem] flex-col items-center justify-center rounded-2xl bg-gray-50 p-6"
>
	<canvas id="canvasgame" bind:this={canvas} width=600px height=600px></canvas>

	
</div>
