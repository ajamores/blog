export function renderProjCard(proj) {

  const title = `<h3 class="text-3xl text-ctp-peach">${proj.title}</h3>`
  
  const description = `<p class="text-md mb-3 text-slate-100">${proj.description}</p>`

  const tech = `
    <ul class="tech-tags flex gap-2 flex-wrap mt-2">
      ${proj.tech.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `

  const learnMore = `
    <div class="learn-more mt-2 cursor-pointer w-fit inline-flex items-center gap-2 text-ctp-peach text-lg font-semibold border-b border-ctp-peach/40 pb-0.5 hover:border-ctp-peach hover:gap-3 transition-all duration-200">
      Learn More
      <i data-lucide="arrow-down" class="w-4 h-4"></i>
    </div>
  `

  const bullets = proj.bullets.map(b => `
    <li class="flex items-start gap-2">
      <span class="w-1.5 h-1.5 rounded-full bg-ctp-peach mt-2 shrink-0"></span>
      <span>${b}</span>
    </li>
  `).join('')

  const liveBtn = proj.live ? `
    <a href="${proj.live}" target="_blank">
      <button class="flex items-center gap-2 px-4 py-2 rounded-xl bg-ctp-peach/15 border border-ctp-peach/40 text-ctp-peach text-sm font-semibold hover:bg-ctp-peach/25 hover:border-ctp-peach transition-all duration-200">
        <i data-lucide="external-link" class="w-4 h-4"></i>
        Live
      </button>
    </a>
  ` : ''

  const projDetails = `
    <div class="proj-details hidden mt-4 p-5 bg-ctp-surface0 rounded-xl border border-ctp-peach/20">
      ${description}
      <h4 class="text-ctp-peach font-semibold mb-2">Key Features</h4>
      <ul id="tech-tags" class="space-y-2 text-sm">
        ${bullets}
      </ul>
      <div class="proj-links mt-6 flex gap-3">
        <a href="${proj.github}" target="_blank">
          <button class="flex items-center gap-2 px-4 py-2 rounded-xl border border-ctp-peach/40 text-ctp-peach text-sm font-semibold hover:bg-ctp-peach/10 hover:border-ctp-peach transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Github
          </button>
        </a>
        ${liveBtn}
      </div>
    </div>
  `

  const projInfo = `
    <div class="proj-info flex flex-col gap-4">
      ${title}
      ${tech}
      ${learnMore}
      ${projDetails}
    </div>
  `

  const image = `
    <div class="proj-pic">
      <img src="${proj.image}" alt="${proj.alt}" class="rounded-2xl w-full object-cover" />
    </div>
  `

  const left = proj.side === 'left' ? projInfo : image
  const right = proj.side === 'left' ? image : projInfo

  return `
    <div class="proj mt-20 grid grid-cols-2 gap-15 items-start">
      ${left}
      ${right}
    </div>
  `
}