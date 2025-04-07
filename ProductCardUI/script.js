let isAdded = false; // Declare the variable outside the event listener to retain its state

document.getElementById("heartIcon").addEventListener("click", function () {
  if (isAdded) {
    alert("Product already added to the wishlist!");
  } else {
    // Change background color of the container when item is added
    document.querySelector(".heartContainer").style.backgroundColor = "red";

    // Toggle the active class to change the heart's color
    this.classList.toggle("active");

    // Show alert after 0.3 seconds
    setTimeout(function () {
      alert("Item added to the wishlist!");
    }, 300); // 300 milliseconds = 0.3 seconds

    // Mark as added
    isAdded = true;
  }
});
