const myNav = document.querySelectorAll('.menu');

myNav.forEach(menu => {
    menu.addEventListener('mouseover', ()=> {
        menu.classList.toggle('active')

    });

    menu.addEventListener('mouseout', ()=> {
        menu.classList.remove('active')

    })
});

const textJs = document.querySelector('.js-text');
const text = 'Ready your team for future work trends';
let idx = 1;

writeText()

function writeText(){
    textJs.innerText = text.slice(0, idx);

    idx++

    if(idx > text.length) {
        idx = 1;

    }

    setTimeout(writeText, 100);
   
};


const hamMenu = document.querySelector('.hamburger');

const hiddenMenu = document.querySelector('.header-content nav');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hiddenMenu.classList.toggle('active')
});

const observables = document.querySelectorAll('.observable');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      });
      
      observables.forEach(observable => {
        observer.observe(observable);
      });
      
