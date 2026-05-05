const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.innerHTML = "Please enter valid values";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  result.innerHTML = `Your BMI is ${bmi}`;
});
