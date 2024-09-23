let slideIndexes = [0, 0]; // An array to store the slide index for each carousel
let slideContainers = document.querySelectorAll('.slides'); // Select all slide containers

function plusSlides(n, carouselIndex) {
  showSlides(slideIndexes[carouselIndex] += n, carouselIndex);
}

function currentSlide(n, carouselIndex) {
  showSlides(slideIndexes[carouselIndex] = n - 1, carouselIndex);
}

function showSlides(n, carouselIndex) {
  let slides = slideContainers[carouselIndex].querySelectorAll('img');
  let dots = slideContainers[carouselIndex].closest('.carousel').querySelectorAll('.dot');

  if (n >= slides.length) { slideIndexes[carouselIndex] = 0; }
  if (n < 0) { slideIndexes[carouselIndex] = slides.length - 1; }

  slides.forEach((slide, i) => {
    slide.style.display = (i === slideIndexes[carouselIndex]) ? 'block' : 'none';
  });

  dots.forEach(dot => dot.classList.remove("active-dot"));
  dots[slideIndexes[carouselIndex]].classList.add("active-dot");
}

// Initialize the first slide for both carousels
showSlides(0, 0);
showSlides(0, 1);
