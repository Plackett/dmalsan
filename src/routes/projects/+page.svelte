<script>
	import Icon from "@iconify/svelte";

</script>

<Icon icon="fontisto:arrow-down" class="fixed bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 text-orange-500"/>
<Icon icon="fontisto:arrow-down" class="fixed bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9 w-12 h-12 text-red-500"/>

<div class="grid grid-cols-3 gap-4">
    <object title="Project 1" data="./proj1.pdf" type="application/pdf" class="col-span-2 w-full h-[52rem]"></object>
    <div>
        <h1>Project 1</h1>
        <p>Description for project one.</p>
    </div>
    <div>
        <h1>Project 2</h1>
        <p>Description for project two.</p>
    </div>
    <object title="Project 2" data="./proj2.pdf" type="application/pdf" class="col-span-2 w-full h-[52rem]"></object>
    <object title="Project 3" type="application/pdf" class="col-span-2 w-full h-[52rem]"></object>
    <div>
        <h1>Project 3</h1>
        <p>Description for project three.</p>
    </div>
</div>