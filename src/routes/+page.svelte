<div class="flex h-screen flex-col items-center space-y-6 p-4">
	<!-- Header Text -->
	<div class="space-y-2 text-center font-serif text-black dark:text-[#eee]">
		<h1 class="text-3xl font-bold md:text-5xl">John-Nicholas (Niko) Krinos</h1>
		<p class="text-md md:text-xl">Welcome to my e-Portfolio!</p>
	</div>

	<!-- Main Content Section with Images -->
	<div class="flex h-full w-full flex-col gap-4 md:flex-row">
		<!-- About Section -->
		<a
			href="./about.html"
			class="group relative flex flex-1 flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:flex-[1.3]"
		>
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img
				src="https://dmalsan.com/ENC2135/images/portrait2023.jpg"
				alt="Picture of me!"
				class="h-auto w-40 rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110 md:w-56 lg:w-64"
			/>
			<span
				class="dark:text-[var(--color-main-2) mt-4 text-lg font-semibold"
				style="color: var(--color-main-1);">About Me</span
			>
		</a>

		<!-- Projects Section -->
		<a
			href="./projects.html"
			class="group relative flex flex-[1.2] flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:flex-[1.5]"
		>
			<div class="relative">
				<img
					src="https://dmalsan.com/ENC2135/images/self-driving.jpg"
					alt="Self-driving Car Project"
					class="absolute h-auto w-40 rounded-lg shadow-lg transition-opacity duration-500 group-hover:opacity-0 md:w-56 lg:w-72"
				/>
				<img
					src="https://dmalsan.com/ENC2135/images/accident.jpg"
					alt="Accident Scene Project"
					class="h-auto w-40 rounded-lg opacity-0 shadow-lg transition-opacity duration-500 group-hover:opacity-100 md:w-56 lg:w-72"
				/>
			</div>
			<span
				class="dark:text-[var(--color-main-2) mt-4 text-lg font-semibold"
				style="color: var(--color-main-1);">Projects</span
			>
		</a>

		<!-- Reflections Section -->
		<a
			href="./reflection.html"
			class="group relative flex flex-[1.2] flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:flex-[1.5]"
		>
			<img
				src="https://dmalsan.com/ENC2135/images/rearview-mirror.jpg"
				alt="Rearview Reflection"
				class="h-auto w-40 rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110 md:w-56 lg:w-72"
			/>
			<span
				class="dark:text-[var(--color-main-2) mt-4 text-lg font-semibold"
				style="color: var(--color-main-1);">Reflections</span
			>
		</a>
	</div>
</div>
