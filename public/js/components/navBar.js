export const renderNavBar = () => {

    return`
        <header class="fixed top-0 left-0 right-0 py-4 shadow-1xl backdrop-blur-sm z-10 text-white ">
            <div class=" max-w-6xl mx-auto flex justify-between px-4 sm:px-6">
                <h1 class="font-semibold text-2xl tracking-wide text-sky-500 dark:text-ctp-peach">Armand Amores</h1>
                <nav class="    gap-4 text-xl flex items-center text-sky-600 dark:text-white" id="navbar">
                    <a href="/" class="hidden md:flex">Home</a>
                    <a href="#" class="hidden md:flex ">About</a>
                    <a href="/blog" class="hidden md:flex ">Blog</a>
                    <a href="#" class="hidden md:flex ">Resume</a>
                    <button id="sunMoon" class="border rounded-4xl p-1 cursor-pointer  "><i
                            data-lucide="sun"></i></button>
                    <button id="menuBtn" class="block md:hidden cursor-pointer"><i data-lucide="menu"></i></button>
                    <a href="#" class="hidden md:flex ">Github</a>
                    <a href="#" class="hidden md:flex ">Linkedin</a>
                    <a href="#" class="hidden md:flex ">Youtube</a>
                </nav>
            </div>
        </header>

        <!-- Mobile drawer -->
        <div id="mobileMenu"
            class="hidden md:hidden flex-col gap-4 px-6 pt-4 pb-6 text-lg text-black dark:text-white cursor-pointer font-semibold">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="/">Blog</a>
            <a href="#">Resume</a>
            <a href="#">Github</a>
            <a href="#">Linkedin</a>
            <a href="#">Youtube</a>
        </div> 
    `
}