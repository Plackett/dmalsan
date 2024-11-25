<script>
	import Icon from '@iconify/svelte';
</script>

<!-- Scroll Down Icon -->
<Icon
	icon="fontisto:arrow-down"
	class="fixed bottom-4 left-1/2 z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-orange-500"
/>

<!-- Main Grid for Projects -->
<div class="grid w-full grid-cols-2 gap-4">
	<!-- Project 2 -->
	<div class="flex flex-col items-center">
		<h1 class="mt-4 text-center text-xl">
			Project 2 - Rhetorical Analysis of two Rhetorical Artifacts
		</h1>
		<p class="text-center">
			In this project we were asked to analyse the rhetorical appeals of two artifacts relevant to
			the topic we chose for Project 1.
		</p>
	</div>
	<object title="Project 2" data="./proj2.pdf" type="application/pdf" class="h-[52rem] w-full"
	></object>
</div>
<!-- Project 3 -->
<h1 class="mb-2 mt-4 border-b-4 pb-2 text-center text-xl" id="proj3">
	Project 3 - Multigenre Persuasive Campaign
</h1>
<div class="grid h-[52rem] w-full grid-cols-3 gap-4">
	<p class="text-center">
		Artifact One is a web-based video game, <a href="./game.html">click here to play!</a>
	</p>
	<div>
		<p class="text-center">Artifact Two is the editorial displayed below:</p>
		<div
			style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
 			padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 			border-radius: 8px; will-change: transform;"
		>
			<iframe
				loading="lazy"
				style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
				src="https://www.canva.com/design/DAGXCyG6Vy0/uMPLNH0B5HjSX5xFMMCvCA/view?embed"
				allowfullscreen="allowfullscreen"
				allow="fullscreen"
			>
			</iframe>
		</div>
		<a
			href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGXCyG6Vy0&#x2F;uMPLNH0B5HjSX5xFMMCvCA&#x2F;view?utm_content=DAGXCyG6Vy0&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
			target="_blank"
			rel="noopener">Autonomous Ethics Editorial</a
		>
	</div>
	<div>
		<p class="text-center">Artifact Three is a photo collage I created out of photos from news articles on self-driving car accidents</p>
		<img src="https://drive.usercontent.google.com/download?id=1okuWdFQzFFHb7h9nQpgi43-aUhL-l12k" alt="photo collage of self-driving car accidents">
		<p>Here is a list of all of the links I grabbed these images from in no particular order:</p>
		<a href="https://www.fox35orlando.com/news/electric-vehicle-fire-adds-hurricane-helene-devastation-florida">https://www.fox35orlando.com/news/electric-vehicle-fire-adds-hurricane-helene-devastation-florida</a>
		<a href="https://www.nbcwashington.com/investigations/no-one-in-the-car-self-driving-app-raises-questions-after-maryland-crash/3746690/">https://www.nbcwashington.com/investigations/no-one-in-the-car-self-driving-app-raises-questions-after-maryland-crash/3746690/</a>
		<a href="https://abc7news.com/san-francisco-woman-injured-pedestrian-crash-cruise/13857047/">https://abc7news.com/san-francisco-woman-injured-pedestrian-crash-cruise/13857047/</a>
		<a href="https://www.nytimes.com/interactive/2018/03/20/us/self-driving-uber-pedestrian-killed.html">https://www.nytimes.com/interactive/2018/03/20/us/self-driving-uber-pedestrian-killed.html</a>
		<a href="https://www.bbc.com/news/business-68101907">https://www.bbc.com/news/business-68101907</a>
		<a href="https://www.nbcnews.com/tech/tech-news/self-driving-uber-car-hit-killed-woman-did-not-recognize-n1079281">https://www.nbcnews.com/tech/tech-news/self-driving-uber-car-hit-killed-woman-did-not-recognize-n1079281</a>
		<a href="https://www.chron.com/news/houston-texas/transportation/article/texas-self-driving-accidents-19744952.php">https://www.chron.com/news/houston-texas/transportation/article/texas-self-driving-accidents-19744952.php</a>
		<a href="https://www.cnn.com/2022/06/15/cars/nhtsa-autopilot-robotaxi-crash-data/index.html">https://www.cnn.com/2022/06/15/cars/nhtsa-autopilot-robotaxi-crash-data/index.html</a>
	</div>
</div>
