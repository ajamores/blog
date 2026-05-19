export function renderProjCard(proj) {

  const title = `<h3 class="text-3xl text-sky-500 dark:text-ctp-peach">${proj.title}</h3>`

  const description = `<p class="text-base mb-3 text-sky-800 dark:text-slate-100">${proj.description}</p>`

  const tech = `
    <ul class="tech-tags flex gap-2 flex-wrap mt-2">
      ${proj.tech.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `

  const learnMore = `
    <div class="learn-more mt-2 cursor-pointer w-fit inline-flex items-center gap-2 text-sky-500 dark:text-ctp-peach text-lg font-semibold border-b border-sky-700/40 dark:border-ctp-peach/40 pb-0.5  hover:border-sky-900 dark:hover:border-ctp-peach hover:gap-3 transition-all duration-200">
      Learn More
      <i data-lucide="arrow-down" class="w-4 h-4"></i>
    </div>
  `

  const bullets = proj.bullets.map(b => `
    <li class="flex items-start gap-2" >
      <span class="w-1.5 h-1.5 rounded-full bg-sky-900 dark:bg-ctp-peach mt-2 shrink-0"></span>
      <p class="dark:text-white text-sky-900 text-base ">${b}</p>
    </li>
  `).join('')

  const liveBtn = proj.live ? `
    <a href="${proj.live}" target="_blank">
      <button class="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer
        bg-sky-100 border border-sky-300 text-sky-700 
        dark:bg-ctp-peach/15 dark:border-ctp-peach/40 dark:text-ctp-peach 
        text-sm font-semibold 
        hover:bg-sky-200 hover:border-sky-400
        dark:hover:bg-ctp-peach/25 dark:hover:border-ctp-peach 
        transition-all duration-200">
        <i data-lucide="external-link" class="w-4 h-4"></i>
        Live
      </button>
    </a>
  ` : ''

  const projDetails = `
    <div class="proj-details  mt-4 p-5 bg-sky-50 dark:bg-ctp-mantle/70 rounded-xl border border-sky-200 dark:border-ctp-peach/20">
      ${description}
      <h4 class="text-sky-600 dark:text-ctp-peach font-semibold text-lg mb-2">Key Features</h4>
      <ul id="tech-tags" class="space-y-2 text-sm">
        ${bullets}
      </ul>
      <div class="proj-links mt-6 flex gap-3">
        <a href="${proj.github}" target="_blank">
          <button class="flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer
            border border-sky-300 text-sky-700
            dark:border-ctp-peach/40 dark:text-ctp-peach 
            text-sm font-semibold 
            hover:bg-sky-100 hover:border-sky-400
            dark:hover:bg-ctp-peach/10 dark:hover:border-ctp-peach 
            transition-all duration-200">
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
  <div class="
    proj-info flex flex-col gap-4
    order-1
    ${proj.side === 'left' ? 'md:order-1' : 'md:order-2'}
  ">
    ${title}
    ${tech}
    ${learnMore}
    ${projDetails}
  </div>
`
  const image = `

  <div   width="1000"
        height="600" class="
    proj-pic
    order-2
     md:group-hover:scale-[1.25]
    transition-all duration-700 ease-in-out
    ${proj.side === 'left' ? 'md:order-2' : 'md:order-1'}
    
    
  ">
    
    <div class="
  relative overflow-hidden rounded-2xl shadow-lg
  ring-1 ring-sky-200/20 dark:ring-ctp-peach/20

  transition-all duration-300 ease-out
    ">

      <!-- Static image -->
      <img 
              width="1000"
        height="600"
        src="${proj.image}"
        alt="${proj.alt}"
        class="
          proj-img
          w-full h-full object-cover
          transition-all duration-2000
          group-hover:opacity-0  
          group-hover:scale-[1.25]
        "
        decoding="async" 
        loading="lazy"
      />

      <!-- Hover video -->
      <video 
        class="
          proj-video
          absolute inset-0
          w-full h-full object-cover
          opacity-0
          transition-all duration-500
          group-hover:opacity-100
        
          
          
        "
        muted
        loop
        playsinline
        preload="none"
      >        
      
      <source src="${proj.video}" type="video/webm" />
      </video>

    </div>
  </div>
`



  return `
  <div class="
    proj group mt-16 px-17 py-2 lg:py-10 md:mt-12
    grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20
    items-start cursor-pointer

    transition-all duration-300 ease-out
    hover:shadow-2xl rounded-2xl p-6 hover:-translate-y-2 
  ">
    ${projInfo}
    ${image}
  </div>
`
}