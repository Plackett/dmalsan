<script>
	import Icon from "@iconify/svelte";
</script>

<!-- Scroll Down Icon -->
<Icon icon="fontisto:arrow-down" class="fixed bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 text-orange-500"/>

<!-- Main Grid for Projects -->
<div class="grid grid-cols-2 gap-4 w-full">
    <!-- Project 1 -->
    <object title="Project 1" data="./proj1.pdf" type="application/pdf" class="w-full h-[52rem]"></object>
    <div class="flex flex-col items-center">
        <h1 class="text-center mt-4">Project 1</h1>
        <p class="text-center">Description for project one.</p>
    </div>

    <!-- Project 2 -->
    <div class="flex flex-col items-center">
        <h1 class="text-center mt-4">Project 2</h1>
        <p class="text-center">Description for project two.</p>
    </div>
    <object title="Project 2" data="./proj2.pdf" type="application/pdf" class="w-full h-[52rem]"></object>

    <!-- Project 3 -->
    <object title="Project 3" data="./proj3.pdf" type="application/pdf" class="w-full h-[52rem]"></object>
    <div class="flex flex-col items-center">
        <h1 class="text-center mt-4">Project 3</h1>
        <p class="text-center">Description for project three.</p>
    </div>
</div>
