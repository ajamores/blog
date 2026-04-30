import { initThemeToggle } from './theme.js'
import { experiences } from './exp/data.js'
import { renderExpCard } from './components/expCard.js'

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
    const accent  = list.dataset.accent;
    const shadow  = list.dataset.shadow;

    list.querySelectorAll('.skill-card').forEach(card => {

        card.addEventListener('mouseenter', () => {
            card.style.borderColor = accent;
            card.style.boxShadow  = `0 0 0 1px ${accent}, 0 8px 32px ${shadow}, 0 0 60px ${shadow}`;
            card.querySelector('i').style.filter  = `drop-shadow(0 0 8px ${accent})`;
            card.querySelector('span').style.color = accent;
        });

        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width)  * 100;
            const y = ((e.clientY - rect.top)  / rect.height) * 100;
            card.style.setProperty('--mx', `${x}%`);
            card.style.setProperty('--my', `${y}%`);

            // subtle tilt
            const tiltX = ((e.clientY - rect.top)  / rect.height - 0.5) * -12;
            const tiltY = ((e.clientX - rect.left) / rect.width  - 0.5) *  12;
            card.style.transform = `translateY(-4px) scale(1.06) perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '';
            card.style.boxShadow   = '';
            card.style.transform   = '';
            card.querySelector('i').style.filter   = '';
            card.querySelector('span').style.color  = '';
        });
    });
});


const insertExp = (filteredExp) => {

    filteredExp.forEach(exp => {
    const left = exp.side === 'left' ? renderExpCard(exp) : '<div></div>'
    const right = exp.side === 'right' ? renderExpCard(exp) : '<div></div>'
    
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

    document.querySelectorAll('.info').forEach(i => i.classList.add('hidden'))

    const more = document.querySelectorAll('.more-btn')
    more.forEach(btn => {
    btn.classList.add('cursor-pointer')
    btn.addEventListener('click', () => {
        const currentInfo = btn.closest('.exp').querySelector('.info')
        const isHidden = currentInfo.classList.contains('hidden')
        document.querySelectorAll('.info').forEach(i => i.classList.add('hidden'))
        if (isHidden) currentInfo.classList.remove('hidden')
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

        layout.innerHTML = ''

        document.querySelectorAll('#exp-btns button').forEach(btn => {
            btn.classList.remove('active');
        })
        btn.classList.add('active');

        expChoice = btn.textContent.toLowerCase().trim();
        filteredExp = experiences.filter( ex => {
            return ex.type === expChoice;
        })
        console.log(filteredExp);
        insertExp(filteredExp);
        lucide.createIcons();
    });

});







lucide.createIcons();