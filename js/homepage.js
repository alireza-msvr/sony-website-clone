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




