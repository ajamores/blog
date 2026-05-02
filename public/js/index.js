import { initThemeToggle } from './theme.js'
import { experiences } from './data/exp.js'
import { renderExpCard } from './components/expCard.js'
import { projects } from './data/proj.js'
import { renderProjCard } from './components/projCard.js'

//toggle between light and dark mode
initThemeToggle();

//hambuger menu logic
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');

    menuBtn.innerHTML = isOpen
        ? '<i data-lucide="menu"></i>'
        : '<i data-lucide="x"></i>';

    lucide.createIcons();
});

//Mouse glow logic
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--spotlight-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--spotlight-y', `${e.clientY}px`);
});


document.querySelectorAll('.skill-list').forEach(list => {
    const accent = list.dataset.accent;
    const shadow = list.dataset.shadow;

    list.querySelectorAll('.skill-card').forEach(card => {

        card.addEventListener('mouseenter', () => {
            card.style.borderColor = accent;
            card.style.boxShadow = `0 0 0 1px ${accent}, 0 8px 32px ${shadow}, 0 0 60px ${shadow}`;
            card.querySelector('i').style.filter = `drop-shadow(0 0 8px ${accent})`;
            card.querySelector('span').style.color = accent;
        });

        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mx', `${x}%`);
            card.style.setProperty('--my', `${y}%`);

            // subtle tilt
            const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
            const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
            card.style.transform = `translateY(-4px) scale(1.06) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '';
            card.style.boxShadow = '';
            card.style.transform = '';
            card.querySelector('i').style.filter = '';
            card.querySelector('span').style.color = '';
        });
    });
});

/**
 * Get array of filtered expriences and render them on html
 * @param {*} filteredExp 
 */
const insertExp = (filteredExp) => {

    ///clear what is on the current layout 
    layout.innerHTML = ''

    //For each exp assign side of timeline and blank div for the opposite side
    filteredExp.forEach(exp => {
        const left = exp.side === 'left' ? renderExpCard(exp) : '<div></div>'
        const right = exp.side === 'right' ? renderExpCard(exp) : '<div></div>'

        //Create middle divider 
        layout.innerHTML += `
        ${left}
        <div class="flex flex-col items-center h-full">
        <div class="w-0.5 bg-ctp-peach/40 flex-1"></div>
        <div class="w-4 h-4 rounded-full bg-ctp-peach shrink-0"></div>
        <div class="w-0.5 bg-ctp-peach/40 flex-1"></div>
        </div>
        ${right}
    `
    })

    //Hide additional info for all exps
    document.querySelectorAll('.info').forEach(i => i.classList.add('hidden'))


    const exp = document.querySelectorAll('.exp')
    exp.forEach(card => {
        card.classList.add('cursor-pointer')
        const btn = card.querySelector('.more-btn')

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)'
            card.style.transition = 'all 0.3s ease'
            card.style.boxShadow = '0 0 25px rgba(250,179,135,0.25), 0 0 60px rgba(250,179,135,0.1)'
            card.style.borderColor = 'rgba(250,179,135,0.7)'
            btn.style.color = '#fab387'
            btn.style.transition = 'color 0.3s ease, transform 0.3s ease'
        })

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)'
            card.style.boxShadow = '0 0 15px rgba(250,179,135,0.2)'
            card.style.borderColor = 'rgba(250,179,135,0.5)'
            btn.style.color = ''
        })

        card.addEventListener('click', () => {
            const currentInfo = card.querySelector('.info')
            const isHidden = currentInfo.classList.contains('hidden')

            document.querySelectorAll('.info').forEach(i => i.classList.add('hidden'))

            // reset all chevrons
            document.querySelectorAll('.more-btn').forEach(b => b.style.transform = '')

            if (isHidden) {
                currentInfo.classList.remove('hidden')
                btn.style.transform = 'rotate(180deg)'
            }
        })
    })
}


const layout = document.getElementById('exp-layout')

//set default button to work active
let expChoice = 'work';
document.getElementById('exp-btns').firstElementChild.classList.add('active');

let filteredExp = experiences.filter(ex => {
    return ex.type === expChoice;
});

// console.log(filteredExp); 
insertExp(filteredExp); //Get default work exps on first 

document.querySelectorAll('#exp-btns button').forEach(btn => {

    console.log('click')

    btn.addEventListener('click', () => {


        document.querySelectorAll('#exp-btns button').forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('bg-ctp-peach/20', 'text-ctp-peach')
        })
        btn.classList.add('active');
        btn.classList.add('bg-ctp-peach/20', 'text-ctp-peach')

        expChoice = btn.dataset.type;
        filteredExp = experiences.filter(ex => {
            return ex.type === expChoice;
        })
        console.log(filteredExp);
        insertExp(filteredExp);
        lucide.createIcons();
    });

});

//--------------Logic for projects--------------------
const container = document.getElementById('proj-container')

projects.forEach(proj => {
    container.innerHTML += renderProjCard(proj)
})

lucide.createIcons()

document.querySelectorAll('.learn-more').forEach(btn => {
    btn.addEventListener('click', () => {
        const panel = btn.closest('.proj-info').querySelector('.proj-details')
        const isHidden = panel.classList.contains('hidden')
        panel.classList.toggle('hidden')
        btn.innerHTML = isHidden
            ? 'Hide Details <i data-lucide="arrow-up" class="w-4 h-4"></i>'
            : 'Learn More <i data-lucide="arrow-down" class="w-4 h-4"></i>'
        lucide.createIcons()
    })
})







lucide.createIcons();