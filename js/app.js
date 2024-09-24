let slideIndexes = [0, 0, 0, 0];  // An array to store the slide index for each carousel
let slideContainers = document.querySelectorAll('.slides'); // Select all slide containers

function plusSlides(n, carouselIndex) {
  // console.log("gonna call showSlides with n = ", n +1, " and carouselIndex = ", carouselIndex);
  showSlides(slideIndexes[carouselIndex] += n, carouselIndex);
}

function currentSlide(n, carouselIndex) {
  // console.log("gonna call showSlides with n = ", n -1, " and carouselIndex = ", carouselIndex);
  showSlides(slideIndexes[carouselIndex] = n - 1, carouselIndex);
}

function showSlides(n, carouselIndex) {
  console.log("showSlides called with n = ", n, " and carouselIndex = ", carouselIndex);
  console.dir(slideContainers);
  let slides = slideContainers[carouselIndex].querySelectorAll('img');
  console.dir(slides);

  let dots = slideContainers[carouselIndex].closest('.carousel').querySelectorAll('.dot');

  if (n >= slides.length) { slideIndexes[carouselIndex] = 0; }
  if (n < 0) { slideIndexes[carouselIndex] = slides.length - 1; }

  slides.forEach((slide, i) => {
    slide.style.display = (i === slideIndexes[carouselIndex]) ? 'block' : 'none';
  });

  console.log("Dots length: ", dots.length, "Index: ", slideIndexes[carouselIndex]);
  dots.forEach(dot => dot.classList.remove("active-dot"));
  if (dots.length > slideIndexes[carouselIndex]) {
    dots[slideIndexes[carouselIndex-1]].classList.add("active-dot");
  } else {
    console.error("Dot index out of range or no dots present.");
  }
}

// Initialize the first slide for both carousels
showSlides(0, 0);
showSlides(0, 1);
showSlides(2  , 2);
showSlides(0  , 3);






document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submit action

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  fetch(this.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your message. We will get back to you soon!');
        this.reset(); // Optionally reset the form after successful submission
      } else {
        alert('Sorry, Error when sending message.');
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('There was a problem sending your message. Please try again.');
    });
});

