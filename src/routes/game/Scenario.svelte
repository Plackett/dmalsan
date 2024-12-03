<script>
	import { onMount } from 'svelte';

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
	const catSpeed = 1;
	const spawnInterval = 3000;
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

	class Button {
		hovered = false;
		selected = false;

		constructor(x, y, width, height, color, hover, sel, text) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			this.color = color;
			this.hover = hover;
			this.sel = sel;
			this.hovered = false;
			this.selected = false;
			this.text = text;
		}

		draw(context) {
			context.beginPath();
			if (this.hovered == false && this.selected == false) {
				context.fillStyle = this.color;
			} else if (this.selected == false) {
				context.fillStyle = this.hover;
			} else {
				context.fillStyle = this.sel;
			}
			context.roundRect(this.x, this.y, this.width, this.height, 10);
			context.fill();
			context.font = '20px Helvetica';
			context.fillStyle = 'black';
			context.fillText(this.text, this.x + this.width / 5, this.y + this.height / 1.6);
			context.closePath();
		}

		checkHover(currx, curry) {
			if (
				currx >= this.x &&
				currx <= this.x + this.width &&
				curry >= this.y &&
				curry <= this.y + this.height
			) {
				this.hovered = true;
			} else {
				this.hovered = false;
			}
		}

		checkSel(currx, curry) {
			return (
				currx >= this.x &&
				currx <= this.x + this.width &&
				curry >= this.y &&
				curry <= this.y + this.height
			);
		}
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

		let Buttons = [];
		Buttons.push(new Button(0, 200, 100, 50, '#FF0000', '#FF2200', '#FFEE00', 'Level 0'));
		Buttons.push(new Button(0, 255, 100, 50, '#FF0000', '#FF2200', '#FFEE00', 'Level 1'));
		Buttons.push(new Button(0, 310, 100, 50, '#FF0000', '#FF2200', '#FFEE00', 'Level 2'));
		Buttons.push(new Button(0, 365, 100, 50, '#FF0000', '#FF2200', '#FFEE00', 'Level 3'));
		Buttons.push(new Button(0, 420, 100, 50, '#FF0000', '#FF2200', '#FFEE00', 'Level 4'));
		Buttons.push(new Button(0, 475, 100, 50, '#FF0000', '#FF2200', '#FFEE00', 'Level 5'));
		Buttons[0].selected = true;

		function onMouseDown(event) {
			const rect = canvas.getBoundingClientRect();
			const realx = (event.clientX - rect.left) * (canvas.width / rect.width);
			const realy = (event.clientY - rect.top) * (canvas.height / rect.height);

			let chosen = -1;
			Buttons.forEach((button, i) => {
				if (button.checkSel(realx, realy)) {
					button.selected = true;
					chosen = i;
				}
			});
			if (chosen !== -1) {
				automationLevel = chosen;
				Buttons.forEach((button, i) => {
					if (i !== chosen) button.selected = false;
				});
			}
		}

		function onMouseMove(event) {
			const rect = canvas.getBoundingClientRect();
			const realx = (event.clientX - rect.left) * (canvas.width / rect.width);
			const realy = (event.clientY - rect.top) * (canvas.height / rect.height);

			Buttons.forEach((button) => button.checkHover(realx, realy));
		}

		canvas.addEventListener('mousedown', onMouseDown);
		canvas.addEventListener('mousemove', onMouseMove);

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
			ctx.fillText('SAE Automation Level: ' + automationLevel, 20, 30);
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

		function applySpeed() {
			x += speed * Math.sin(angle);
			y -= speed * Math.cos(angle);
		}

		function applyAutomation() {
			switch (automationLevel) {
				case 0: // No Automation
					// Update car angle (turning)
					if (turnLeft) angle = Math.max(angle - turnSpeed, -maxAngle);
					if (turnRight) angle = Math.min(angle + turnSpeed, maxAngle);
					applySpeed();
					break;

				case 1: // Speed Automation
					if (speed < maxSpeed) {
						speed += acceleration;
					} else if (speed > maxSpeed) {
						speed -= friction;
					}
					// Update car angle (turning)
					if (turnLeft) angle = Math.max(angle - turnSpeed, -maxAngle);
					if (turnRight) angle = Math.min(angle + turnSpeed, maxAngle);
					applySpeed();
					break;

				case 2: // Speed and Braking Automation
					// Update car angle (turning)
					if (turnLeft) angle = Math.max(angle - turnSpeed, -maxAngle);
					if (turnRight) angle = Math.min(angle + turnSpeed, maxAngle);
					stopForObstacles();
					applySpeed();
					break;

				case 3: // Conditional Automation
					if (Math.random() < 0.3) {
						// Update car angle (turning)
						if (turnLeft) angle = Math.max(angle - turnSpeed, -maxAngle);
						if (turnRight) angle = Math.min(angle + turnSpeed, maxAngle);
						applySpeed();
					} else {
						if (speed < maxSpeed) {
							speed += acceleration;
						} else if (speed > maxSpeed) {
							speed -= friction;
						}
						avoidObstaclesAndCenter();
					}
					break;

				case 4: // Partial Automation (Handles Speed + Steering Corrections)
					if (speed < maxSpeed) {
						speed += acceleration;
					} else if (speed > maxSpeed) {
						speed -= friction;
					}
					if (Math.random() < 0.1) {
						// Update car angle (turning)
						if (turnLeft) angle = Math.max(angle - turnSpeed, -maxAngle);
						if (turnRight) angle = Math.min(angle + turnSpeed, maxAngle);
						applySpeed();
					} else {
						avoidObstaclesAndCenter();
					}
					break;

				case 5: // Full Automation
					if (speed < maxSpeed) {
						speed += acceleration;
					} else if (speed > maxSpeed) {
						speed -= friction;
					}

					avoidObstaclesAndCenter();
					break;
			}
		}

		function avoidObstaclesAndCenter() {
			let closestCat = null;
			let minDistance = Infinity;

			// Find the closest cat directly ahead
			for (const cat of cats) {
				if (cat.y - 50 < y) {
					// Only consider cats ahead of the car
					const distance = y - cat.y;
					if (distance < minDistance) {
						minDistance = distance;
						closestCat = cat;
					}
				}
			}

			if (closestCat) {
				console.log('Close Cat at ' + closestCat.x + ',' + closestCat.y);
				// Determine if the cat is left or right of the car
				const directionToCat = closestCat.x - x;

				if (Math.abs(directionToCat) < 200 && y - closestCat.y < 300) {
					// Cat is dangerously close, decide direction to evade
					if (directionToCat > 0) {
						// Cat is to the right, turn left
						angle = Math.max(angle - turnSpeed, -maxAngle);
					} else {
						// Cat is to the left, turn right
						angle = Math.min(angle + turnSpeed, maxAngle);
					}
				}
			} else {
				const centerBias = (300 - x) * 0.01; // Bias toward center, smaller factor for smoother motion
				if (Math.abs(centerBias) > 0.5) {
					angle = Math.max(Math.min(angle + centerBias, maxAngle), -maxAngle);
				} else {
					// Straighten the car if close to the center
					angle = angle > 0 ? Math.max(angle - turnSpeed, 0) : Math.min(angle + turnSpeed, 0);
				}
			}

			// Apply movement based on updated angle
			applySpeed();
		}

		function stopForObstacles() {
			let gas = true;
			// stops car if cat is too close
			for (let i = 0; i < cats.length; i++) {
				if (cats[i].y - y <= 100 && cats[i].y - y > 0) {
					speed -= acceleration * 2.5;
					if (speed < 0) speed = 0;
					gas = false;
					break;
				}
			}
			if (speed >= maxSpeed || !gas) speed -= friction;
			else speed += acceleration;
		}

		let animFrameId;

		function updateGame() {
			resetCanvas();
			for (var i = 0; i < Buttons.length; i++) {
				Buttons[i].draw(ctx);
			}
			drawRoad();
			drawRoadLine(offset);

			// Update car speed
			if (accel && speed < maxSpeed) speed += acceleration;
			if (decel && speed > 0.5) speed -= acceleration;
			if (speed < 0.01) speed = 0;

			// Apply friction (natural deceleration)
			if (!accel && !decel && speed > 0) speed -= friction;

			applyAutomation();

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
			animFrameId = requestAnimationFrame(updateGame);
		}

		function handleLeavingWindow() {
			if (document.hidden) {
				cancelAnimationFrame(animFrameId);
			} else {
				animFrameId = requestAnimationFrame(updateGame);
			}
		}

		setInterval(function () {
			if (document.hasFocus()) {
				spawnCat();
			}
		}, spawnInterval);
		document.addEventListener('visibilitychange', handleLeavingWindow);
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

	function getAutomationDesc(level) {
		switch (level) {
			case 0:
				return 'Full human control.';
			case 1:
				return 'Speed is controlled.';
			case 2:
				return 'Speed and some steering is controlled.';
			case 3:
				return 'Speed and Steering, asks for manual intervention sometimes.';
			case 4:
				return 'Speed and Steering, messes up sometimes.';
			case 5:
				return 'No human control.';
		}
	}
</script>

<div
	class="flex min-h-screen max-w-[52rem] grid-cols-3 flex-col items-center justify-center rounded-2xl bg-gray-50 p-6"
>
	<p class="text-black">Controls: WASD or Arrow Keys</p>
	<p class="text-black">
		Press the buttons on the left side to try the different automation levels!
	</p>
	<canvas id="canvasgame" bind:this={canvas} width="600px" height="600px"></canvas>
	<p class="text-black">Explanation of the automation levels:</p>
	{#each Array(6).fill(0) as _, i}
		<p class="text-black">
			Level {i}: {getAutomationName(i)}: {getAutomationDesc(i)}
		</p>
	{/each}
	<p class="text-black">
		Here are some scenarios arranged in level of automation - action format and reflections on them:
	</p>
	<p class="text-black">
		Level 0 - braking: You slammed on the brakes to avoid hitting the cat, this is the more
		ethically correct answer due to it minimizing risk for others who are not involved and it avoids
		needlessly endangering others.
	</p>
	<p class="text-black">
		Level 0 - moving into the other lane: You chose to swerve into the other lane to avoid hitting
		the cat, this is the less ethically correct answer because it puts others at risk and does not
		avoid harming others.
	</p>
	<p class="text-black">
		Level 1 - do nothing: You trusted the car to stop itself, without knowing how reliable or
		effective it is. This is less ethical because you are not being accountable and failing to be
		situationally aware.
	</p>
	<p class="text-black">
		Level 1 - brake yourself: Manually slamming on the brakes yourself is the more ethical option
		because you are taking accountability, showing situational awareness, and ensuring the safety of
		the cat.
	</p>
	<p class="text-black">
		Level 2 - do nothing: You put your faith in the car systems to stop it before colliding with the
		cat, this is less ethical because the reliability of the car is not established and you have no
		reason to believe that it can sense the cat based on the information provided, making it a
		failure on your part if the car fails to stop in time.
	</p>
	<p class="text-black">
		Level 2 - intervene: You stopped the car yourself, disregarding the car's supposed ability to
		handle situations like these on its own, this is more ethical because you can be confident in
		yourself to have done all you could and is more practical without any information on the car's
		reliability in situations like this.
	</p>
	<p class="text-black">
		Level 3 - let the car do it alone: Denying the car's request for intervention is less ethical
		because the system's request implies that it has an issue processing the current situation and
		is unsure that it will take the best action.
	</p>
	<p class="text-black">
		Level 3 - help the car out: Accepting the car's request for intervention is more ethical because
		you fulfill your responsibility to minimize harm and shows your responsibility and vigilance
		while driving.
	</p>
</div>
