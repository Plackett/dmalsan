<div class="flex flex-col items-center h-screen p-4 space-y-6">
	<!-- Header Text -->
	<div class="text-center text-black dark:text-[#eee] space-y-2 font-serif">
	  <h1 class="text-3xl md:text-5xl font-bold">John-Nicholas (Niko) Krinos</h1>
	  <p class="text-md md:text-xl">Welcome to my e-Portfolio!</p>
	</div>
  
	<!-- Main Content Section with Images -->
	<div class="flex h-full w-full flex-col md:flex-row gap-4">
	  <!-- About Section -->
	  <a href="./about" class="group flex-1 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 hover:flex-[1.3]">
		<!-- svelte-ignore a11y_img_redundant_alt -->
		<img
		  src="https://dmalsan.com/ENC2135/images/portrait2023.jpg"
		  alt="Picture of me!"
		  class="w-40 md:w-56 lg:w-64 h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110"
		/>
		<span class="font-semibold text-lg mt-4 dark:text-[var(--color-main-2)" style="color: var(--color-main-1);">About Me</span>
	  </a>
  
	  <!-- Projects Section -->
	  <a href="./projects" class="group flex-[1.2] flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 hover:flex-[1.5]">
		<div class="relative">
		  <img
			src="https://dmalsan.com/ENC2135/images/self-driving.jpg"
			alt="Self-driving Car Project"
			class="w-40 md:w-56 lg:w-72 h-auto rounded-lg shadow-lg transition-opacity duration-500 group-hover:opacity-0 absolute"
		  />
		  <img
			src="https://dmalsan.com/ENC2135/images/accident.jpg"
			alt="Accident Scene Project"
			class="w-40 md:w-56 lg:w-72 h-auto rounded-lg shadow-lg transition-opacity duration-500 opacity-0 group-hover:opacity-100"
		  />
		</div>
		<span class="font-semibold text-lg mt-4 dark:text-[var(--color-main-2)" style="color: var(--color-main-1);">Projects</span>
	  </a>
  
	  <!-- Reflections Section -->
	  <a href="./reflection" class="group flex-[1.2] flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 hover:flex-[1.5]">
		<img
		  src="https://dmalsan.com/ENC2135/images/rearview-mirror.jpg"
		  alt="Rearview Reflection"
		  class="w-40 md:w-56 lg:w-72 h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110"
		/>
		<span class="font-semibold text-lg mt-4 dark:text-[var(--color-main-2)" style="color: var(--color-main-1);">Reflections</span>
	  </a>
	</div>
</div>  