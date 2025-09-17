const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentIndex = index;
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Auto-play
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

// Initialize
showSlide(currentIndex);

const susTrack = document.querySelector('.sus-slider-track');
const susSlides = document.querySelectorAll('.sus-slide');
const susPrevBtn = document.querySelector('.sus-prev');
const susNextBtn = document.querySelector('.sus-next');
const susDots = document.querySelectorAll('.sus-dot');

let susIndex = 0;

function susUpdateSlider() {
  susTrack.style.transform = `translateX(-${susIndex * 100}%)`;
  susUpdateDots();
}

function susUpdateDots() {
  susDots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === susIndex);
  });
}

susNextBtn.addEventListener('click', () => {
  susIndex = (susIndex + 1) % susSlides.length;
  susUpdateSlider();
});

susPrevBtn.addEventListener('click', () => {
  susIndex = (susIndex - 1 + susSlides.length) % susSlides.length;
  susUpdateSlider();
});

susDots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    susIndex = idx;
    susUpdateSlider();
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelector(".first-products");
    const cards = document.querySelectorAll(".first-product");
    const dotsContainer = document.querySelector(".slider-dots");

    let currentIndex = 0;

    cards.forEach((_, i) => {
        const dot = document.createElement("button");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("button");

    function goToSlide(index) {
        currentIndex = index;
        const offset = -index * cards[0].offsetWidth;
        products.style.transform = `translateX(${offset}px)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }


    window.addEventListener("resize", () => goToSlide(currentIndex));
});

const latestViewport = document.querySelector('.latest-slider-container');
const latestTrack = document.querySelector('.latest-slider-track');
const latestCards = Array.from(document.querySelectorAll('.latest-latest-card'));
const latestPrev = document.querySelector('.latest-prev');
const latestNext = document.querySelector('.latest-next');
const latestDotsContainer = document.querySelector('.latest-dots');

let latestIndex = 0;
let cardsPerView = 3;
let totalPages = 0;
let stepPx = 0; 
let gapPx = 0;

function getCardsPerView() {
  const w = window.innerWidth;
  if (w <= 600) return 1;
  if (w <= 991) return 2;
  return 3;
}

function measure() {

  cardsPerView = getCardsPerView();


  const cs = getComputedStyle(latestTrack);
  const gap = cs.gap || cs.columnGap || '0px';
  gapPx = parseFloat(gap) || 0;


  const cardRect = latestCards[0].getBoundingClientRect();
  const cardWidth = cardRect.width; 


  stepPx = cardWidth + gapPx;


  totalPages = Math.max(1, latestCards.length - cardsPerView + 1);


  if (latestIndex > totalPages - 1) latestIndex = totalPages - 1;

  buildDots();
  update();
}

function buildDots() {
  latestDotsContainer.innerHTML = '';
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('span');
    dot.className = 'latest-dot' + (i === latestIndex ? ' active' : '');
    dot.addEventListener('click', () => {
      latestIndex = i;
      update();
    });
    latestDotsContainer.appendChild(dot);
  }
}

function update() {
  const offset = latestIndex * stepPx;
  latestTrack.style.transform = `translateX(-${offset}px)`;


  [...latestDotsContainer.children].forEach((d, i) =>
    d.classList.toggle('active', i === latestIndex)
  );

  
  latestPrev.disabled = latestIndex === 0;
  latestNext.disabled = latestIndex === totalPages - 1;
  latestPrev.style.opacity = latestPrev.disabled ? 0.5 : 1;
  latestNext.style.opacity = latestNext.disabled ? 0.5 : 1;
}

latestNext.addEventListener('click', () => {
  if (latestIndex < totalPages - 1) {
    latestIndex += 1; 
    update();
  }
});

latestPrev.addEventListener('click', () => {
  if (latestIndex > 0) {
    latestIndex -= 1; 
    update();
  }
});


let resizeT;
window.addEventListener('resize', () => {
  clearTimeout(resizeT);
  resizeT = setTimeout(measure, 120);
});


window.addEventListener('load', measure);

document.addEventListener('DOMContentLoaded', () => {

  measure();
});
const backToTop = document.getElementById('backToTop');


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
function showToast(message, duration = 3000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => container.removeChild(toast), 500);
  }, duration);
}
window.addEventListener('load', () => {
  showToast(' Loading success', 4000);
});
