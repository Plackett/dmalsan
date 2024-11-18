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
<h1 class="mt-4 text-center text-xl">Project 3 - Multigenre Persuasive Campaign</h1>
<div class="grid h-[52rem] w-full grid-cols-3 gap-4">
	<p class="text-center">Description for project three artifact one.</p>
	<p class="text-center">Description for project three artifact two.</p>
	<p class="text-center">Description for project three artifact three.</p>
</div>
