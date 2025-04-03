// Getting all the necessary DOM elements by their IDs or class name
const loginBtn = document.getElementById("submit"); // Button with ID "submit"
const icon = document.getElementById("icon"); // Element with ID "icon" (likely an icon or button)
const box = document.querySelector(".box"); // Element with class "box" (could be a modal or box to display)

// This function will be executed when the form is submitted
function onloginSubmit(e) {
  e.preventDefault(); // Prevents the default form submission behavior (e.g., page reload)

  // Get the values of "lastname" and "caseID" input fields
  const lastName = document.getElementById("lastname"); // Input with ID "lastname"
  const caseID = document.getElementById("caseID"); // Input with ID "caseID"

  window.location.href = "Comingsoon.html";
  // Additional logic could be added here to process or validate form data
}

// This function will be executed when the "icon" is clicked
function onReport(e) {
  // Show the box (likely a modal or hidden section) by setting its display style to "block"
  box.style.display = "block";
}

// Event listener for click event on the "submit" button
loginBtn.addEventListener("click", onloginSubmit); // When "submit" is clicked, onSubmit function is triggered

// Event listener for click event on the "icon"
icon.addEventListener("click", onReport); // When "icon" is clicked, onReport function is triggered

// Event listener for double-click event on the "icon"
icon.addEventListener("dblclick", function () {
  // When the "icon" is double-clicked, hide the "box" by setting its display style to "none"
  box.style.display = "none";
});

//  Registration page logic
