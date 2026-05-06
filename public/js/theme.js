export const initThemeToggle = () => {
    const btn = document.getElementById('sunMoon')
    if (!btn) return  // pages without the button just skip

    // Set correct icon on load
    const isDarkOnLoad = document.documentElement.classList.contains('dark')
    btn.innerHTML = isDarkOnLoad ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>'
    lucide.createIcons()

    btn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark')
        localStorage.theme = isDark ? 'dark' : 'light'

        btn.innerHTML = isDark ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>'
        lucide.createIcons()
    })
}


//Localstorage for light and dark mode 
if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
    document.documentElement.classList.add('dark')
}