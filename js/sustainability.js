`use strict`

// START FOR SLIDER
const container = document.querySelector('.storiesContainer');
const leftBtn = document.getElementById('leftBTN');
const rightBtn = document.getElementById('rightBTN');

rightBtn.addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
  
});

leftBtn.addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
  
});

// FOR BACK TO TOP BTN
const backToTopbtn = document.querySelector('.backToTop');
const titleBarEl = document.querySelector('.titleBar')
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopbtn.classList.add('show');
        titleBarEl.classList.add('titlebar-scroll')

    } else {
        backToTopbtn.classList.remove('show');
        titleBarEl.classList.remove('titlebar-scroll')
    }
});

backToTopbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
backToTopbtn.classList.remove('show');
});

// START FOR SHOW MENU ITEM
const menuBTN = document.querySelector('#menuBTN')
const megaMenuEl = document.querySelector('.magaMenu')

menuBTN.addEventListener('click',()=>{

    megaMenuEl.classList.toggle('show')
})

// START FOR SUBMENU ABOUT
const clsBTNforAbout = document.querySelector('#clsBTN-about')
const aboutLinkEL = document.querySelector('#aboutLink')
const subAboutEL = document.querySelector('.subMenu-About')
clsBTNforAbout.addEventListener('click',()=>{
    subAboutEL.classList.remove('show')
})
aboutLinkEL.addEventListener('click',()=>{
    subAboutEL.classList.toggle('show')
})