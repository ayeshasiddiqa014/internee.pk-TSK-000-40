const images = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');
const imageElements = document.querySelectorAll('.carousel-images img');
let index = 0;


imageElements.forEach((_, i) => {
  const indicator = document.createElement('span');
  indicator.addEventListener('click', () => {
    index = i;
    showImage();
  });
  indicatorsContainer.appendChild(indicator);
});

const updateIndicators = () => {
  const indicators = document.querySelectorAll('.indicators span');
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
};

const showImage = () => {
  const totalImages = imageElements.length;
  if (index >= totalImages) index = 0;
  if (index < 0) index = totalImages - 1;
  const offset = -index * 100;
  images.style.transform = `translateX(${offset}%)`;
  updateIndicators();
};

nextButton.addEventListener('click', () => {
  index++;
  showImage();
});

prevButton.addEventListener('click', () => {
  index--;
  showImage();
});


setInterval(() => {
  index++;
  showImage();
}, 3000); // Change image every 3 seconds
