let btn = document.querySelector("button");
let colorContainer = document.getElementById("colorContainer");
let copyBtn = document.getElementById("copy-btn");

let color;

btn.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  colorContainer.style.backgroundColor = `rgb(${c1} , ${c2} , ${c3})`;
  colorContainer.style.color = "white";
  colorContainer.textContent = `rgb(${c1} , ${c2} , ${c3})`;
  colorContainer.style.display = "flex";
  colorContainer.style.justifyContent = "center";
  colorContainer.style.alignItems = "center";
  //   document.body.style.backgroundColor = `rgb(${c1} , ${c2} , ${c3})`;

  color = `rgb(${c1} , ${c2} , ${c3})`;
});



// Copy the color code   // Read about this code first 
copyBtn.addEventListener("click", function () {
    if (!color) {
      alert("Generate the color code first !!");
      return;
    }
    copyBtn.style.backgroundColor = color;
    copyBtn.style.color = "white";
    copyBtn.textContent = color;
    
    // Copy to clipboard
    navigator.clipboard.writeText(color).then(function () {
      alert("Color code copied to clipboard");
  
      // Reset button's style after 1.5 second
      setTimeout(function() {
        copyBtn.style.backgroundColor = "";  // Reset background color
        copyBtn.style.color = "";  // Reset text color
        copyBtn.textContent = "Copy Color"; // Reset text
      }, 1500);  // 1 second delay before resetting
    }).catch(function () {
      alert("Failed to copy the color code");
    });
  });
  