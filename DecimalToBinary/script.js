const input = document.getElementById("value");
    const output = document.getElementById("output");
    const button = document.getElementById("convert");

    button.addEventListener("click", () => {
      const decimalStr = input.value.trim();

      // Check if the input is empty or not a valid number
      if (!decimalStr || isNaN(decimalStr) || decimalStr < 0) {
        output.textContent = "Please enter a valid positive decimal number.";
        return;
      }

      let decimal = Number(decimalStr);
      let binary = '';

      // Convert decimal to binary
      while (decimal > 0) {
        let rem = decimal % 2;
        binary = rem + binary;
        decimal = Math.floor(decimal / 2);
      }

      // If no binary is generated (i.e., input was 0)
      if (binary === '') {
        binary = '0';
      }

      output.textContent = `Binary: ${binary}`;
      input.value = ""; // Clear the input field
    });