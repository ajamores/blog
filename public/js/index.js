import { initThemeToggle } from './theme.js'
import { experiences } from './exp/data.js'
import { renderExpCard } from './components/expCard.js'
import { projects } from './exp/proj.js'
import { renderProjCard } from './components/projCard.js'
import { getAllPublishedBLogPosts } from './api.js'

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

// Mouse glow logic
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--spotlight-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--spotlight-y', `${e.clientY}px`);
});

// Animate all section headings on scroll
const sections = ['skills', 'experience', 'projects', 'latest-blogs'];

sections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;

    const heading = section.querySelector('.skills-heading');
    const subheading = heading?.closest('div').nextElementSibling;

    if (heading) heading.style.opacity = '0';
    if (subheading) subheading.style.opacity = '0';

    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (heading) {
                    heading.style.animation = 'none';
                    heading.offsetHeight;
                    heading.style.animation = 'fadeUp 0.6s ease forwards 0.1s';
                }
                if (subheading) {
                    subheading.style.animation = 'none';
                    subheading.offsetHeight;
                    subheading.style.animation = 'fadeUp 0.6s ease forwards 0.25s';
                }
            } else {
                if (heading) { heading.style.opacity = '0'; heading.style.animation = 'none'; }
                if (subheading) { subheading.style.opacity = '0'; subheading.style.animation = 'none'; }
            }
        });
    }, { threshold: 0.1 }).observe(section);
});

// experience specific
const expObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const btnContainer = document.getElementById('exp-btn-container');
            const expLayout = document.getElementById('exp-layout');
            btnContainer.style.animation = 'none';
            btnContainer.offsetHeight;
            btnContainer.style.animation = 'fadeUp 0.6s ease forwards 0.4s';
            expLayout.style.animation = 'none';
            expLayout.offsetHeight;
            expLayout.style.animation = 'fadeUp 0.6s ease forwards 0.55s';
        } else {
            document.getElementById('exp-btn-container').style.opacity = '0';
            document.getElementById('exp-layout').style.opacity = '0';
        }
    });
}, { threshold: 0.1 });

expObserver.observe(document.getElementById('experience'));

// Hero scroll animation
const heroItems = document.querySelectorAll('#hero-text > *');
const imageWrapper = document.getElementById('image-wrapper');

const resetHeroAnimations = () => {
    heroItems.forEach((el, i) => {
        el.style.animation = 'none';
        el.style.opacity = '0';
    });
    imageWrapper.style.animation = 'none';
    imageWrapper.style.opacity = '0';
};

const playHeroAnimations = () => {
    heroItems.forEach((el, i) => {
        el.style.animation = 'none';
        el.offsetHeight; // force reflow
        el.style.animation = `fadeUp 0.6s ease forwards ${0.1 + i * 0.15}s`;
    });
    imageWrapper.style.animation = 'none';
    imageWrapper.offsetHeight;
    imageWrapper.style.animation = 'fadeUp 0.8s ease forwards 0.4s';
};

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            playHeroAnimations();
        } else {
            resetHeroAnimations();
        }
    });
}, { threshold: 0.3 });

heroObserver.observe(document.getElementById('hero'));

const comets = document.querySelectorAll('.comet-pair');

comets.forEach((pair, i) => {
    const thick = pair.querySelector('.thick');
    const thin = pair.querySelector('.thin');

    let angle = (360 / comets.length) * i;
    let speed = 0;
    let targetSpeed = 1.2;
    let direction = 1;
    let dashLength = 80;
    let phase = 'growing';
    let frameCount = i * 200; // offset each comet's random check

    function animate() {
        frameCount++;
        speed += (targetSpeed - speed) * 0.02;
        angle += speed * direction;

        if (phase === 'growing') {
            dashLength = Math.min(80, dashLength + 0.8);

            // stagger the random trigger per comet using frameCount
            if (dashLength >= 80 && frameCount % 300 === 0 && Math.random() < 0.3) {
                phase = 'shrinking';
                targetSpeed = 0;
                frameCount = 0;
            }
        }

        if (phase === 'shrinking') {
            dashLength = Math.max(5, dashLength - 0.5);

            if (speed < 0.01 && dashLength <= 5) {
                direction *= -1;
                phase = 'growing';
                targetSpeed = 1.4;
            }
        }

        thick.setAttribute('stroke-dasharray', `${dashLength} 1500`);
        thin.setAttribute('stroke-dasharray', `${dashLength * 0.5} 1500`);
        thick.style.transform = `rotate(${angle}deg)`;
        thin.style.transform = `rotate(${angle}deg)`;

        requestAnimationFrame(animate);
    }

    animate();
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


const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-group').forEach((group, i) => {
                setTimeout(() => {
                    group.classList.remove('opacity-0');
                    group.classList.add('animate-fade-up');
                }, i * 150);

                group.querySelectorAll('.skill-card').forEach((card, j) => {
                    setTimeout(() => {
                        card.classList.remove('opacity-0');
                        card.classList.add('animate-pop-in');
                    }, i * 150 + j * 70);
                });
            });
        } else {
            entry.target.querySelectorAll('.skill-group').forEach(group => {
                group.classList.add('opacity-0');
                group.classList.remove('animate-fade-up');
            });
            entry.target.querySelectorAll('.skill-card').forEach(card => {
                card.classList.add('opacity-0');
                card.classList.remove('animate-pop-in');
            });
        }
    });
}, { threshold: 0.2 });

skillsObserver.observe(document.getElementById('skills'));



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

            // close all first
            document.querySelectorAll('.info').forEach(i => {
                i.classList.add('hidden')
                i.classList.remove('visible')
            })

            // reset all chevrons
            document.querySelectorAll('.more-btn').forEach(b => b.style.transform = '')

            if (isHidden) {
                currentInfo.classList.remove('hidden')
                currentInfo.classList.add('visible')
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
        // console.log(filteredExp);
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

const projObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const card = entry.target;
            const index = [...document.querySelectorAll('#proj-container > *')].indexOf(card);
            card.style.animation = 'none';
            card.offsetHeight;
            const dir = index % 2 === 0 ? 'fadeLeft' : 'fadeRight';
            card.style.animation = `${dir} 0.6s ease forwards`;
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.animation = 'none';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('#proj-container > *').forEach(card => {
    card.style.opacity = '0';
    projObserver.observe(card);
});

//--------Logic for latest blog posts

//Fetch all published posts on start
const postData = await getAllPublishedBLogPosts();

//isolate posts 
const posts = postData.data.posts;
const latest = posts.slice(0, 4);

//got blogs container 
const blogContainer = document.getElementById('blogs');

latest.forEach(element => {
    let post = document.createElement('a');
    post.href = `/post/${element.slug}`;
    let postTitle = document.createElement("h2");

    //bundle these in dateTime
    const dateTime = document.createElement('div');
    let postDate = document.createElement("time");
    let ttr = document.createElement("span");

    let postExcerpt = document.createElement("p");

    let readMore = document.createElement('div');

    //Post class
    post.className = "homePost";

    postTitle.className = "homePostTitle";
    postDate.className = "homePostDate";
    dateTime.className = "homeDateTime"
    ttr.className = 'ttr'
    postExcerpt.className = "homePostExcerpt"

    //give elements values
    postTitle.textContent = element.title;

    //First line of post
    const date = new Date(element.createdAt).toISOString().split('T')[0];
    postDate.textContent = date;
    postDate.dateTime = date;
    ttr.textContent = `${element.readingTime} min read`;

    const seperator = document.createElement('span').textContent = '•'
    dateTime.append(postDate, seperator, ttr);


    postExcerpt.textContent = element.excerpt;
    readMore.innerHTML = '<span>Read More</span><span style="position:relative;z-index:1;"><i data-lucide="arrow-right"></i></span>';
    readMore.id = 'homeReadBtn';
    readMore.className = 'flex items-center gap-1';

    //Package it all up in post div and append to contianer
    post.append(dateTime, postTitle, postExcerpt, readMore);
    // console.log(post);
    blogContainer.append(post);
});

const blogObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const card = entry.target;
            const index = [...document.querySelectorAll('#blogs > *')].indexOf(card);
            card.style.animation = 'none';
            card.offsetHeight;
            const dir = index % 2 === 0 ? 'fadeLeft' : 'fadeRight';
            card.style.animation = `${dir} 0.6s ease forwards`;
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.animation = 'none';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('#blogs > *').forEach(post => {
    post.style.opacity = '0';
    blogObserver.observe(post);
});

// animate the view all button
const viewAllBtn = document.querySelector('#latest-blogs .text-center.mt-10');
viewAllBtn.style.opacity = '0';

new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            viewAllBtn.style.animation = 'none';
            viewAllBtn.offsetHeight;
            viewAllBtn.style.animation = 'fadeUp 0.6s ease forwards 0.3s';
        } else {
            viewAllBtn.style.opacity = '0';
            viewAllBtn.style.animation = 'none';
        }
    });
}, { threshold: 0.1 }).observe(viewAllBtn);




lucide.createIcons();