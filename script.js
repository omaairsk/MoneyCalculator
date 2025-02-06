// script.js
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".input-group input");
    const totalAmount = document.getElementById("totalAmount");
  
    function calculateTotal() {
      let total = 0;
      inputs.forEach((input) => {
        const noteValue = parseInt(input.parentElement.getAttribute("data-note"));
        const count = parseInt(input.value) || 0;
        total += noteValue * count;
      });
      totalAmount.textContent = total;
    }
  
    inputs.forEach((input) => {
      input.addEventListener("input", calculateTotal);
    });
  });
  