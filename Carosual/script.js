let imageList = document.querySelector(".imagelist");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let index = 0;
const totalSlides = imageList.querySelectorAll("li").length;

// Move the slides to the right
next.addEventListener("click", function () {
  index++;
  if (index >= totalSlides) {
    index = 0; // Loop back to the first slide
  }
  updateCarousel();
});

// Move the slides to the left
prev.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = totalSlides - 1; // Loop back to the last slide
  }
  updateCarousel();
});

// Function to update the slide
function updateCarousel() {
  const offset = -index * 100; // Move the slide by 100% for each index change
  imageList.style.transform = `translateX(${offset}%)`; // Slide the images using CSS transform
}

/*
offset is the value that determines how much to move the ul element horizontally.

translateX(${offset}%) applies the calculated movement, shifting the list of images left or right by the desired amount.

The -index * 100 ensures that each time the index changes, the correct image is shown by sliding the list of images in the horizontal direction.
 */
