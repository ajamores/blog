export function renderExpCard(exp) {

  const bullets = exp.bullets.map((b, i) => `
    <li class="flex items-start gap-2 text-md" style="animation-delay: ${i * 60}ms">
        <span class="w-1.5 h-1.5 rounded-full bg-ctp-peach mt-2 shrink-0"></span>
        <p>${b}</p>
    </li>
`).join('')

  return `
    <div class="exp ${exp.id >= 2 ? 'mt-5' : ''} bg-ctp-mantle p-7  rounded-2xl border border-ctp-peach/50 shadow-[0_0_15px_rgba(250,179,135,0.2)] ${exp.side === 'left' ? 'mr-10' : 'ml-10'}">
      <div class="flex gap-12 items-start">
        <div class="flex-1">
          <h3 class="text-2xl font-bold mb-1">${exp.title}</h3>
          <p class="text-md font-semibold text-ctp-peach">${exp.company === '' ? '' : '@'} ${exp.company}</p>
          <span class="text-ctp-peach text-md">${exp.date}</span>
          <p class="mt-4 text-md">${exp.summary}</p>
          <div class="info hidden mt-5">
            <hr class="mb-4">
            <ul id=class="space-y-3 mt-4">${bullets}</ul>
          </div>
        </div>
        <button class="more-btn transition-transform duration-300 shrink-0  cursor-pointer">
          <i data-lucide="chevron-down" class="text-white w-7 h-7"></i>
        </button>
      </div>
    </div>
  `
}