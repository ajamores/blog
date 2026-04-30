export function renderExpCard(exp) {

    const bullets = exp.bullets.map(b => `
    <li class="flex items-start gap-2 text-sm">
      <span class="w-1.5 h-1.5 rounded-full bg-ctp-peach mt-2 shrink-0"></span>
      <p>${b}</p>
    </li>
  `).join('')

    return `
    <div class="exp ${exp.id >= 2 ? 'mt-5' : ''} bg-ctp-mantle p-7  rounded-2xl border border-ctp-peach/50 shadow-[0_0_15px_rgba(250,179,135,0.2)] ${exp.side === 'left' ? 'mr-10' : 'ml-10'}">
      <div class="flex gap-12 items-start">
        <div class="flex-1">
          <h3 class="text-xl font-bold mb-1">${exp.title}</h3>
          <p class="text-sm font-semibold text-ctp-peach">@ ${exp.company}</p>
          <span class="text-ctp-peach text-sm">${exp.date}</span>
          <p class="mt-4 text-sm">${exp.summary}</p>
          <div class="info hidden mt-5">
            <hr>
            <ul class="space-y-3 mt-4">${bullets}</ul>
          </div>
        </div>
        <button class="more-btn shrink-0">
          <i data-lucide="chevron-down" class="text-white w-5 h-5"></i>
        </button>
      </div>
    </div>
  `
}