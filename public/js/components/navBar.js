export const renderNavBar = () => {

    return `
        <header class="fixed top-0 left-0 right-0 py-4 shadow-1xl backdrop-blur-sm z-10 text-white ">
            <div class=" max-w-6xl mx-auto flex justify-between px-4 sm:px-6">
                <a href="/" class="group w-fit">
                    <h1
                        class=" nav-icon relative inline-block font-semibold text-2xl tracking-wide 
                        text-sky-500 dark:text-ctp-peach
                        transition-all duration-300 ease-out
                        group-hover:tracking-widest
                        group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.55)]
                        dark:group-hover:drop-shadow-[0_0_14px_rgba(250,179,135,0.45)]">

                        Armand Amores

                        <span
                            class="absolute left-1/2 -translate-x-1/2 -bottom-1
                            h-0.5 w-0
                            bg-sky-500 dark:bg-ctp-peach
                            transition-all duration-300 ease-out
                            group-hover:w-full">
                        </span>
                    </h1>
                </a>
                <nav class="  nav-links gap-4 text-xl flex items-center text-sky-600 dark:text-white" id="navbar">
                    <a href="/" class="hidden md:flex">Home</a>
                    <a href="/#skills" class="hidden md:flex ">Skills</a>
                    <a href="/#experience" class="hidden md:flex ">Experience</a>
                    <a href="/#projects" class="hidden md:flex ">Projects</a>
                    
                    <button 
                        id="sunMoon"
                        aria-label="Toggle dark mode"
                        class="border rounded-4xl p-1 cursor-pointer">
                        <i data-lucide="sun"></i>
                    </button>

                    <button 
                        id="menuBtn"
                        aria-label="Open navigation menu"
                        class="block md:hidden cursor-pointer">
                        <i data-lucide="menu"></i>
                    </button>
                    <a href="/blog" class="hidden md:flex ">Blog</a>
                    <a href="https://github.com/ajamores" class="hidden md:flex ">Github</a>
                    <a href="https://www.linkedin.com/in/armandamores/" class="hidden md:flex ">Linkedin</a>
                    <a href="https://www.youtube.com/@armandamores502" class="hidden md:flex ">Youtube</a>
                </nav>
            </div>
        </header>

        <!-- Mobile drawer -->
        <div id="mobileMenu"
            class="hidden md:hidden flex-col gap-4 px-6 pt-4 pb-6 text-lg text-black dark:text-white cursor-pointer font-semibold">
            <a href="/">Home</a>
            <a href="#/skills">Skills</a>
            <a href="/#experience" class="hidden md:flex ">Experience</a>
            <a href="/blog">Blog</a>
            <a href="https://github.com/ajamores">Github</a>
            <a href="https://www.linkedin.com/in/armandamores/">Linkedin</a>
            <a href="https://www.youtube.com/@armandamores502">Youtube</a>
        </div> 
    `
}