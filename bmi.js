document.addEventListener("DOMContentLoaded", () => {
  let weightInput = document.getElementById("weight");
  let heightInput = document.getElementById("height");
  let bmiResult = document.getElementById("bmiResult");
  let calculateBtn = document.getElementById("calculate");
  let clearBtn = document.getElementById("clear");

  // Calculate BMI when '=' button is clicked
  calculateBtn.addEventListener("click", () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height || weight <= 0 || height <= 0) {
      bmiResult.value = "Invalid input!";
      return;
    }

    const bmi = weight / (height * height);
    bmiResult.value = bmi.toFixed(2);

    // Optional: Add BMI category
    let category = "";
    if (bmi < 18.5) category = " (Underweight)";
    else if (bmi < 24.9) category = " (Normal weight)";
    else if (bmi < 29.9) category = " (Overweight)";
    else category = " (Obesity)";

    bmiResult.value += category;
  });

  // Clear inputs when 'C' is clicked
  clearBtn.addEventListener("click", () => {
    weightInput.value = "";
    heightInput.value = "";
    bmiResult.value = "";
  });
});
