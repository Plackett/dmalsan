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
			href="./artifacts.html"
			class="group relative flex flex-1 flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:flex-[1.3]"
		>
			<span
				class="dark:text-[var(--color-main-2) w-auto text-center text-lg font-semibold transition-all duration-500 group-hover:-translate-y-9"
				style="color: var(--color-main-1);">Artifacts</span
			>
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img
				src="https://dmalsan.com/ENC2135/images/portrait2023.jpg"
				alt="Picture of me!"
				class="h-auto w-40 rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110 md:w-56 lg:w-64"
			/>
			<p
				class="text-center font-serif text-lg text-slate-400 transition-all duration-500 group-hover:translate-y-9"
			>
				A collection of two artifacts I created during the class.
			</p>
		</a>

		<!-- Projects Section -->
		<a
			href="./projects.html"
			class="group relative flex flex-[1.2] flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:flex-[1.5]"
		>
			<span
				class="dark:text-[var(--color-main-2) w-auto text-center text-lg font-semibold transition-all duration-500 group-hover:-translate-y-9"
				style="color: var(--color-main-1);">Projects</span
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
			<p
				class="text-center font-serif text-lg text-slate-400 transition-all duration-500 group-hover:translate-y-9"
			>
				Revised version of Project 2 and my artifacts from Project 3 can be found here.
			</p>
		</a>

		<!-- Reflections Section -->
		<a
			href="./reflection.html"
			class="group relative flex flex-[1.2] flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:flex-[1.5]"
		>
			<span
				class="dark:text-[var(--color-main-2) w-auto text-center text-lg font-semibold transition-all duration-500 group-hover:-translate-y-9"
				style="color: var(--color-main-1);">Reflection</span
			>
			<img
				src="https://dmalsan.com/ENC2135/images/rearview-mirror.jpg"
				alt="Rearview Reflection"
				class="h-auto w-40 rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110 md:w-56 lg:w-72"
			/>
			<p
				class="text-center font-serif text-lg text-slate-400 transition-all duration-500 group-hover:translate-y-9"
			>
				A short reflection of what I learned from creating this e-Portfolio.
			</p>
		</a>
	</div>
</div>
