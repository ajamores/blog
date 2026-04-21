export const initThemeToggle = () => {
    const btn = document.getElementById('sunMoon')
    if (!btn) return  // pages without the button just skip

    btn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark')
        localStorage.theme = isDark ? 'dark' : 'light'

        btn.innerHTML = isDark ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>'
        lucide.createIcons()
    })
}