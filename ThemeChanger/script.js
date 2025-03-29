// Select elements from the DOM
let btn = document.querySelector("button"); // The button to toggle visibility of the hidden container
let hiddenContainer = document.querySelector(".hiddenContainer"); // The hidden container (will be shown/hidden)
let images = document.getElementById("images"); // Button for showing image selection
let colors = document.getElementById("colors"); // Button for showing color selection
let colorsContainer = document.querySelector(".colorContainer"); // Container that holds the color boxes
let imageContainer = document.querySelector(".imagesContainer"); // Container that holds the image boxes
let mainContainer = document.querySelector(".main-container"); // The main container that will display the selected background

// Toggle the hiddenContainer visibility when button is clicked
btn.addEventListener("click", function () {
  btn.innerHTML = 'X '; // Change button text to 'X' when clicked
  hiddenContainer.style.display = "flex"; // Show the hidden container (set display to flex)
});

// Toggle the hiddenContainer visibility when button is double-clicked
btn.addEventListener("dblclick", function () {
  btn.textContent = "Theme"; // Reset button text to "Theme" when double-clicked
  hiddenContainer.style.display = "none"; // Hide the hidden container (set display to none)
});

// Toggle Button to show and hide colors container
colors.addEventListener("click", function () {
  colorsContainer.style.display = "grid"; // Display the color container as grid
  imageContainer.style.display = "none"; // Hide the image container
});

// Toggle Button to show and hide images container
images.addEventListener("click", function () {
  imageContainer.style.display = "grid"; // Display the image container as grid
  colorsContainer.style.display = "none"; // Hide the color container
});

// Setup colors and images after the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  const colors = [
    "red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "blueviolet"
  ]; // Array of color names for color boxes
  
  // Array of images with their ids and URLs
  const images = [
    { id: 1, url: "https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, url: "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, url: "https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 4, url: "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" },
    { id: 5, url: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, url: "https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 7, url: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 8, url: "https://images.pexels.com/photos/2131614/pexels-photo-2131614.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 9, url: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];

  const colorBoxes = document.querySelectorAll(".colorContainer > div"); // Select all color boxes
  const imgBoxes = document.querySelectorAll(".imagesContainer > div"); // Select all image boxes

  // Assign different colors to each color box
  colorBoxes.forEach((colorBox, index) => {
    colorBox.style.backgroundColor = colors[index]; // Set background color for each box from the colors array
  });

  // Assign different images to each image box
  imgBoxes.forEach((img, index) => {
    img.style.backgroundImage = `url(${images[index].url})`; // Set background image for each box from the images array
    img.style.objectFit = "cover"; // Make sure the image covers the box without distortion
    img.style.objectPosition = "center"; // Center the image inside the box
  });

  // Add click event listeners for color boxes
  colorBoxes.forEach(function(colorBox) {
    colorBox.addEventListener("click", function() {
      // Get the background color of the clicked colorBox
      const bgColor = window.getComputedStyle(colorBox).backgroundColor;
      mainContainer.style.backgroundColor = bgColor; // Apply the selected color to the main container
    });
  });

  // Add click event listeners for image boxes
  imgBoxes.forEach(function(imgBox) {
    imgBox.addEventListener("click", function() {
      // Get the background image of the clicked imgBox
      const bgImg = window.getComputedStyle(imgBox).backgroundImage;
  
      // Apply the selected background image to the main container
      mainContainer.style.backgroundImage = bgImg;
  
      // Adjust the image behavior inside the main container
      mainContainer.style.backgroundRepeat = "no-repeat";  // Prevent the image from repeating
      mainContainer.style.backgroundSize = "cover";         // Ensure the image covers the entire container
      mainContainer.style.backgroundPosition = "center";    // Center the image inside the container
  
      // Set the main container to take full viewport size
      mainContainer.style.height = "100vh";  // Full viewport height
      mainContainer.style.width = "100vw";   // Full viewport width
    });
  });

  // Optional console log to check the color boxes
  console.log(colorBoxes);
});
