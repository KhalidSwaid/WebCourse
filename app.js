document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.getElementById("buttons");
  const clearButton = document.getElementById("clear");
  const removeButton = document.getElementById("remove");

  buttons.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const buttonText = e.target.textContent;

      if (buttonText === "=") {
        try {
          display.textContent = eval(display.textContent);
        } catch (error) {
          display.textContent = "Error";
        }
      } else if (buttonText === "C") {
        // Clear the display when "C" is clicked
        display.textContent = "0";
      } else if (buttonText === "⌫") {
        // Remove the last digit when "⌫" (remove) is clicked
        removeLastDigit();
      } else if (buttonText === "sqrt") {
        display.textContent = Math.sqrt(parseFloat(display.textContent));
      } else if (buttonText === "x²") {
        display.textContent = Math.pow(parseFloat(display.textContent), 2);
      } else if (buttonText === "sin") {
        display.textContent = Math.sin(parseFloat(display.textContent));
      } else if (buttonText === "cos") {
        display.textContent = Math.cos(parseFloat(display.textContent));
      } else if (buttonText === "tan") {
        display.textContent = Math.tan(parseFloat(display.textContent));
      } else if (buttonText === "π") {
        display.textContent += Math.PI;
      } else if (buttonText === "e") {
        display.textContent += Math.E;
      } else if (buttonText === "x^y") {
        display.textContent += "^";
      } else if (buttonText === "log") {
        display.textContent += "log(";
      } else {
        handleButtonClick(buttonText);
      }
    }
  });

  function handleButtonClick(buttonText) {
    // Handle button clicks based on buttonText
    // You can customize this function based on your requirements
    // For now, it appends the button text to the display
    if (display.textContent === "0" || display.textContent === "Error") {
      display.textContent = buttonText;
    } else {
      display.textContent += buttonText;
    }
  }

  function removeLastDigit() {
    // Remove the last digit from the display
    const currentDisplay = display.textContent;
    display.textContent = currentDisplay.slice(0, -1);
    if (display.textContent === "") {
      display.textContent = "0";
    }
  }
});
