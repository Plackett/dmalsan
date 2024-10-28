<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="">
		Hi my name is Niko!
	</h1>
</section>

<style>
	section {
		display: flex;
		background-size: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		object-fit: none;
		color:aliceblue;
		@apply dark:text-[rgb(228,229,241)]
	}

	h1 {
		width: 100%;
	}

</style>
