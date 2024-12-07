<script>
	import Icon from '@iconify/svelte';
	let title = 'Projects';
</script>

<!-- Scroll Down Icon -->
<Icon
	icon="fontisto:arrow-down"
	class="fixed bottom-4 left-1/2 z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-orange-500"
/>

<section class="container mx-auto p-4">
	<!-- Project 2 Section -->
	<div class="mb-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
		<!-- Project 2 Description -->
		<div class="flex flex-col items-start space-y-4">
			<h1
				class="border-b-4 border-slate-300 pb-2 text-2xl font-semibold text-gray-700 dark:text-gray-300"
			>
				Project 2 - Rhetorical Analysis of Two Rhetorical Artifacts
			</h1>
			<p class="font-serif text-base leading-relaxed text-gray-600 dark:text-gray-400">
				In this project, we were asked to analyze the rhetorical appeals of two artifacts relevant
				to the topic we chose for Project 1. I decided to analyze a piece of artwork created at a
				technology conference that was meant to comment on autonomous driving technology. Throughout
				the paper, we had to analyze pathos, logos, and ethos appeals found in the two artifacts.
			</p>
		</div>

		<!-- Project 2 PDF -->
		<object
			title="Project 2"
			data="./proj2rev.pdf"
			type="application/pdf"
			class="h-[30rem] w-full rounded-lg border border-gray-300 shadow-md md:h-[46rem] md:w-[36rem]"
		></object>
	</div>

	<!-- Project 3 Section -->
	<div>
		<h1
			class="mb-8 border-b-4 border-slate-300 pb-2 text-center text-2xl font-semibold text-gray-700 dark:text-gray-300"
			id="proj3"
		>
			Project 3 - Multigenre Persuasive Campaign
		</h1>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Artifact One -->
			<div class="flex flex-col items-center space-y-4">
				<p class="text-center text-lg font-medium text-gray-700 dark:text-gray-300">
					Artifact One is a web-based video game. <br />
					<a href="./game.html" class="text-blue-500 hover:underline">Click here to play!</a>
				</p>
			</div>

			<!-- Artifact Two -->
			<div>
				<p class="mb-4 text-center text-lg font-medium text-gray-700 dark:text-gray-300">
					Artifact Two is the editorial displayed below:
				</p>
				<div class="relative h-0 w-full overflow-hidden rounded-lg pb-[141.4286%] shadow-lg">
					<iframe
						loading="lazy"
						src="https://www.canva.com/design/DAGXCyG6Vy0/uMPLNH0B5HjSX5xFMMCvCA/view?embed"
						class="absolute left-0 top-0 h-full w-full border-none"
						allowfullscreen
					></iframe>
				</div>
				<a
					href="https://www.canva.com/design/DAGXCyG6Vy0/uMPLNH0B5HjSX5xFMMCvCA/view?embed"
					target="_blank"
					class="mt-2 block text-center text-blue-500 hover:underline"
				>
					Autonomous Ethics Editorial
				</a>
			</div>

			<!-- Artifact Three -->
			<div>
				<p class="mb-4 text-center text-lg font-medium text-gray-700 dark:text-gray-300">
					Artifact Three is a photo collage created from news articles on self-driving car
					accidents.
				</p>
				<a
					href="https://drive.usercontent.google.com/download?id=1okuWdFQzFFHb7h9nQpgi43-aUhL-l12k"
					class="block text-center text-blue-500 hover:underline"
				>
					View the photo collage
				</a>
				<p class="mt-4 text-gray-600 dark:text-gray-400">
					List of links to sources used in the collage:
				</p>
				<ul class="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
					<li>
						<a
							href="https://www.fox35orlando.com/news/electric-vehicle-fire-adds-hurricane-helene-devastation-florida"
							class="text-blue-500 hover:underline"
						>
							Fox 35 Orlando
						</a>
					</li>
					<li>
						<a
							href="https://www.nbcwashington.com/investigations/no-one-in-the-car-self-driving-app-raises-questions-after-maryland-crash/3746690/"
							class="text-blue-500 hover:underline"
						>
							NBC Washington
						</a>
					</li>
					<li>
						<a
							href="https://abc7news.com/san-francisco-woman-injured-pedestrian-crash-cruise/13857047"
							class="text-blue-500 hover:underline"
						>
							ABC 7 News
						</a>
					</li>
					<li>
						<a
							href="https://www.nytimes.com/interactive/2018/03/20/us/self-driving-uber-pedestrian-killed.html"
							class="text-blue-500 hover:underline"
						>
							New York Times
						</a>
					</li>
					<li>
						<a
							href="https://www.bbc.com/news/business-68101907"
							class="text-blue-500 hover:underline"
						>
							BBC News
						</a>
					</li>
					<li>
						<a
							href="https://www.nbcnews.com/tech/tech-news/self-driving-uber-car-hit-killed-woman-did-not-recognize-n1079281"
							class="text-blue-500 hover:underline"
						>
							NBC News
						</a>
					</li>
					<li>
						<a
							href="https://www.chron.com/news/houston-texas/transportation/article/texas-self-driving-accidents-19744952.php"
							class="text-blue-500 hover:underline"
						>
							Chron News
						</a>
					</li>
					<li>
						<a
							href="https://www.cnn.com/2022/06/15/cars/nhtsa-autopilot-robotaxi-crash-data/index.html"
							class="text-blue-500 hover:underline"
						>
							CNN
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
