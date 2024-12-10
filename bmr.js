document.addEventListener("DOMContentLoaded", () => {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const ageInput = document.getElementById("age");
  const genderSelect = document.getElementById("gender");
  const bmrResult = document.getElementById("bmrResult");
  const calculateBtn = document.getElementById("calculate");
  const clearBtn = document.getElementById("clear");

  // Event listener for BMR calculation
  calculateBtn.addEventListener("click", () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const age = parseInt(ageInput.value);
    const gender = genderSelect.value;

    // Input validation
    if (!weight || !height || !age || weight <= 0 || height <= 0 || age <= 0) {
      bmrResult.value = "Invalid input!";
      return;
    }

    let bmr;
    // BMR calculation based on gender
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === "female") {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    // Display the BMR result
    bmrResult.value = `Your BMR is: ${bmr.toFixed(2)} kcal/day`;
  });

  // Event listener to clear inputs
  clearBtn.addEventListener("click", () => {
    weightInput.value = "";
    heightInput.value = "";
    ageInput.value = "";
    genderSelect.value = "male";
    bmrResult.value = "";
  });
});
