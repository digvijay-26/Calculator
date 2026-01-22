let currentDisplay = "";
const displayEl = document.querySelector("#display");
displayEl.value = currentDisplay;

const buttons = document.querySelectorAll(".button-container .button");
buttons.forEach((btn) => {
  const val = btn.textContent.trim();
  if (val === "C") {
    btn.addEventListener("click", () => {
      currentDisplay = "";
      displayEl.value = currentDisplay;
    });
  } else if (val === "=") {
    btn.addEventListener("click", () => {
      try {
        const result = Function(
          '"use strict"; return (' + currentDisplay + ")",
        )();
        currentDisplay = String(result);
      } catch (e) {
        currentDisplay = "Error";
      }
      displayEl.value = currentDisplay;
    });
  } else {
    btn.addEventListener("click", () => {
      currentDisplay += val;
      displayEl.value = currentDisplay;
    });
  }
});
