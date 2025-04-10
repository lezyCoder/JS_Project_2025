const input = document.getElementById("value");
const output = document.getElementById("output");
const button = document.getElementById("convert");

button.addEventListener("click", () => {
    const binaryStr = input.value.trim();

    // Check if the input is empty or contains non-binary characters
    if (!binaryStr || !/^[01]+$/.test(binaryStr)) {
      output.textContent = "Please enter a valid binary number (only 0s and 1s).";
      return;
    }


  let decimal = 0;
  let n = Number(input.value);
  let index = 0;

  while (n > 0) {
    let rem = n % 10;
    decimal += rem * Math.pow(2, index);
    n = Math.floor(n / 10);
    index++;
  }

  output.textContent = `Decimal: ${decimal}`;
  input.value = "";
});