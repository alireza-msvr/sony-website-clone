`use strict`
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
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopbtn.classList.add('show');
    } else {
        backToTopbtn.classList.remove('show');
    }
});

backToTopbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
backToTopbtn.classList.remove('show');
});

const menuBTN = document.querySelector('#menuBTN')
const megaMenuEl = document.querySelector('.magaMenu')

menuBTN.addEventListener('click',()=>{
    console.log(1)
    megaMenuEl.classList.toggle('show')
})
