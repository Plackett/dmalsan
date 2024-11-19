<script>
	// this works just like header declaration in C++
	export let scenario; // Current scenario data
	export let saveDecision; // Function to save the user's decision
	export let nextScenario; // Function to move to the next scenario

	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	let selectedDecision = 0;

	let canvas;
	var carSprite = new Image();
	carSprite.src = './car.svg';
	let catSprite = new Image();
	catSprite.src = './cat.svg';

	let x = 300,
		y = 500;
	let speed = 0;
	let angle = 0;
	const maxSpeed = 5;
	const acceleration = 0.1;
	const friction = 0.02;
	const maxAngle = Math.PI / 4;
	const turnSpeed = 0.01;
	const roadLeftBoundary = 220;
	const roadRightBoundary = 380;
	let karma = 100;

	let turnLeft = false;
	let turnRight = false;
	let accel = false;
	let decel = false;

	const cats = [];
	const catSpeed = 2;
	const spawnInterval = 2000;
	const catWidth = 40,
		catHeight = 40;

	// Automation Level
	let automationLevel = 0;

	function setAutomation(level) {
		automationLevel = level;
	}

	// Mobile touch controls
	function handleTouchStart(direction) {
		if (direction === 'up') accel = true;
		if (direction === 'down') decel = true;
		if (direction === 'left') turnLeft = true;
		if (direction === 'right') turnRight = true;
	}

	function handleTouchEnd(direction) {
		if (direction === 'up') accel = false;
		if (direction === 'down') decel = false;
		if (direction === 'left') turnLeft = false;
		if (direction === 'right') turnRight = false;
	}

	// Keyboard controls
	window.addEventListener('keydown', (event) => {
		if (event.defaultPrevented) return;

		switch (event.key) {
			case 'ArrowUp':
			case 'w':
			case 'W':
				accel = true;
				break;
			case 'ArrowDown':
			case 's':
			case 'S':
				decel = true;
				break;
			case 'ArrowLeft':
			case 'a':
			case 'A':
				turnLeft = true;
				break;
			case 'ArrowRight':
			case 'd':
			case 'D':
				turnRight = true;
				break;
			default:
				return;
		}
		event.preventDefault();
	});

	window.addEventListener('keyup', (event) => {
		if (event.defaultPrevented) return;

		switch (event.key) {
			case 'ArrowUp':
			case 'w':
			case 'W':
				accel = false;
				break;
			case 'ArrowDown':
			case 's':
			case 'S':
				decel = false;
				break;
			case 'ArrowLeft':
			case 'a':
			case 'A':
				turnLeft = false;
				break;
			case 'ArrowRight':
			case 'd':
			case 'D':
				turnRight = false;
				break;
			default:
				return;
		}
		event.preventDefault();
	});

	onMount(() => {
		const ctx = canvas.getContext('2d');

		function resetCanvas() {
			ctx.clearRect(0, 0, 600, 600);
		}

		function drawRoad() {
			ctx.lineWidth = 10;
			ctx.beginPath();
			ctx.moveTo(200, 605);
			ctx.lineTo(220, 100);
			ctx.lineTo(380, 100);
			ctx.lineTo(400, 605);
			ctx.closePath();
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(0, 100);
			ctx.lineTo(600, 100);
			ctx.closePath();
			ctx.stroke();
		}

		function drawRoadLine() {
			ctx.lineWidth = 5;
			ctx.setLineDash([40, 20]);
			ctx.lineDashOffset = offset;
			ctx.beginPath();
			ctx.moveTo(300, 600);
			ctx.lineTo(300, 100);
			ctx.stroke();
			ctx.setLineDash([]);
		}

		function drawCar(x, y, a) {
			ctx.save();
			ctx.translate(x, y);
			ctx.rotate(a);
			ctx.drawImage(carSprite, -40, -80, 80, 160);
			ctx.restore();
		}

		function drawKarma() {
			ctx.font = '20px Helvetica';
			ctx.fillStyle = 'black';
			ctx.fillText('Karma: ' + karma, 450, 30);
		}

		function spawnCat() {
			const catX = Math.random() * (380 - 220) + 220;
			cats.push({ x: catX, y: -catHeight });
		}

		function updateCats() {
			cats.forEach((cat, index) => {
				cat.y += catSpeed + speed; // Move cat with road

				// Check for collision
				const carLeft = x - 40,
					carRight = x + 40,
					carTop = y - 80,
					carBottom = y + 80;
				const catLeft = cat.x,
					catRight = cat.x + catWidth,
					catTop = cat.y,
					catBottom = cat.y + catHeight;

				const collision =
					carRight > catLeft && carLeft < catRight && carBottom > catTop && carTop < catBottom;

				if (collision) {
					karma -= 20;
					cats.splice(index, 1); // Remove cat on collision
				}

				// Remove cat if it moves off-screen
				if (cat.y > 600) {
					karma += 20;
					cats.splice(index, 1);
				}
			});
		}

		function drawCats() {
			cats.forEach((cat) => {
				ctx.drawImage(catSprite, cat.x, cat.y, catWidth, catHeight);
			});
		}

		let offset = 0;

		function applyAutomation() {
			switch (automationLevel) {
				case 0: // No Automation
					// Player controls everything.
					break;

				case 1: // Speed Automation
					if (speed < maxSpeed) {
						speed += acceleration;
					} else if (speed > maxSpeed) {
						speed -= friction;
					}
					break;

				case 2: // Speed and Braking Automation
					if (speed < maxSpeed) {
						speed += acceleration;
					} else if (speed > maxSpeed) {
						speed -= friction;
					}
					if (y <= 450) {
						speed = 0; // Auto-brakes near the top.
					}
					break;

				case 3: // Lane-Keeping Assistance
					avoidObstaclesAndCenter(); // Keep car centered and avoid obstacles.
					break;

				case 4: // Partial Automation (Handles Speed + Steering Corrections)
					if (speed < maxSpeed) {
						speed += acceleration;
					} else if (speed > maxSpeed) {
						speed -= friction;
					}

					avoidObstaclesAndCenter(); // Includes turning for obstacle avoidance.
					break;

				case 5: // Full Automation
					// Automatically navigate, including speed, position, and obstacle avoidance.
					if (speed < maxSpeed) {
						speed += acceleration;
					} else if (speed > maxSpeed) {
						speed -= friction;
					}

					avoidObstaclesAndCenter();
					if (y <= 450) {
						speed = 0; // Stop at the top of the allowed range.
					}
					break;
			}
		}

		function avoidObstaclesAndCenter() {
			let targetX = 300; // Default to the center of the road.

			// Detect cats in the car's path within an extended range
			const nearbyCats = cats.filter(
				(cat) =>
					cat.y > y - 250 && // Extended forward range
					cat.y < y + 100 && // Within a reasonable distance in front of the car
					Math.abs(cat.x - x) < 150 // Cats within a significant horizontal range
			);

			if (nearbyCats.length > 0) {
				// Get the closest cat in the detection range
				const cat = nearbyCats.reduce((closest, current) =>
					Math.abs(current.y - y) < Math.abs(closest.y - y) ? current : closest
				);

				// Avoid the cat: steer away from its X position
				if (cat.x < x) {
					// Cat is to the left, steer to the right
					targetX = Math.min(x + 100, roadRightBoundary - 20);
				} else {
					// Cat is to the right, steer to the left
					targetX = Math.max(x - 100, roadLeftBoundary + 20);
				}
			}

			// Smoothly adjust the car's angle and position toward the target X
			const angleToTarget = Math.atan2(targetX - x, speed);
			const angleDifference = angleToTarget - angle;

			// Gradually turn toward the target
			if (Math.abs(angleDifference) > 0.01) {
				if (angleDifference > 0) {
					angle = Math.min(angle + turnSpeed, maxAngle); // Turn right
				} else {
					angle = Math.max(angle - turnSpeed, -maxAngle); // Turn left
				}
			}

			// Move horizontally based on the current angle
			x += speed * Math.sin(angle);

			// Keep the car within the road boundaries
			if (x < roadLeftBoundary) {
				x = roadLeftBoundary;
				angle = 0; // Straighten out
			} else if (x > roadRightBoundary) {
				x = roadRightBoundary;
				angle = 0; // Straighten out
			}
		}

		function updateGame() {
			resetCanvas();
			drawRoad();
			drawRoadLine(offset);

			// Update car speed
			if (accel && speed < maxSpeed) speed += acceleration;
			if (decel && speed > 0.5) speed -= acceleration;
			if (speed < 0.01) speed = 0;

			// Apply friction (natural deceleration)
			if (!accel && !decel && speed > 0) speed -= friction;

			// Update car angle (turning)
			if (turnLeft) angle = Math.max(angle - turnSpeed, -maxAngle);
			if (turnRight) angle = Math.min(angle + turnSpeed, maxAngle);

			if (automationLevel === 0) {
				// Manual control
				x += speed * Math.sin(angle);
				y -= speed * Math.cos(angle);
			} else {
				applyAutomation();
			}

			// Apply invisible wall if the car is near the top
			if (y <= 450) {
				y = 450;
			}

			// Keep the car within bounds (basic boundary check)
			x = Math.max(220, Math.min(380, x)); // Constrain to road edges
			y = Math.max(100, Math.min(600, y)); // Stay within canvas bounds

			drawCar(x, y, angle);
			drawCats();
			drawKarma();

			updateCats();

			offset = (offset + speed) % 60; // Road line motion
			requestAnimationFrame(updateGame);
		}

		setInterval(spawnCat, spawnInterval);

		updateGame();
	});

	function getAutomationName(level) {
		switch (level) {
			case 0:
				return 'No Automation';
			case 1:
				return 'Driver Assistance';
			case 2:
				return 'Partial Automation';
			case 3:
				return 'Conditional Automation';
			case 4:
				return 'High Automation';
			case 5:
				return 'Full Automation';
		}
	}
</script>

<div
	class="grid min-h-screen max-w-[52rem] grid-cols-3 items-center justify-center rounded-2xl bg-gray-50 p-6"
>
	<!-- Automation Buttons -->
	<div class="float-left flex w-24 flex-col gap-2">
		{#each Array(6).fill(0) as _, i}
			<button class="rounded bg-blue-500 p-2 text-white" on:click={() => setAutomation(i)}>
				Level {i}: {getAutomationName(i)}
			</button>
		{/each}
		<!-- D-pad for mobile controls -->
		<div class="z-10 float-left flex flex-col items-center">
			<button
				class="m-1 rounded bg-gray-300 p-2"
				on:touchstart={() => handleTouchStart('up')}
				on:touchend={() => handleTouchEnd('up')}
			>
				▲
			</button>
			<div class="flex">
				<button
					class="m-1 rounded bg-gray-300 p-2"
					on:touchstart={() => handleTouchStart('left')}
					on:touchend={() => handleTouchEnd('left')}
				>
					◀
				</button>
				<button
					class="m-1 rounded bg-gray-300 p-2"
					on:touchstart={() => handleTouchStart('down')}
					on:touchend={() => handleTouchEnd('down')}
				>
					▼
				</button>
				<button
					class="m-1 rounded bg-gray-300 p-2"
					on:touchstart={() => handleTouchStart('right')}
					on:touchend={() => handleTouchEnd('right')}
				>
					▶
				</button>
			</div>
		</div>
	</div>

	<canvas id="canvasgame" bind:this={canvas} width="600px" height="600px" class="-translate-x-16"
	></canvas>
</div>
