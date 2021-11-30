const sume = document.getElementById("sume");
const people_number = document.getElementById("people-number");
const tip_amount = document.querySelector(".tip-amount-person__dollars");
const total_amount = document.querySelector(".total-amount-person__dollars");
const resetbtn = document.getElementById("reset");

// input elements DOM from HTML to JS
let sumeValue = 0.0;

sume.addEventListener("input", function () {
  if (sume.value.includes(",")) {
    sume.value = sume.value.replace(",", ".");
  }

  sumeValue = parseFloat(sume.value);
  console.log(sumeValue);
});

let people_numberValue = 0;

people_number.addEventListener("input", function () {
  people_numberValue = parseInt(people_number.value);
  console.log(people_numberValue);

  // Tip Amount / person
  let numberOfPercentage =
    ((percentage / 100) * sumeValue) / people_numberValue;
  tip_amount.innerHTML = "$" + numberOfPercentage;
  // end Tip Amount / person

  // Total amount / person
  let TotalAmount = sumeValue / people_numberValue + numberOfPercentage;
  total_amount.innerHTML = "$" + TotalAmount;
});
// end input DOM

//

// calculation
let percentage = 0;
document.querySelector(".percentage5").addEventListener("click", () => {
  percentage = 5;
  console.log(percentage);
});

document.querySelector(".percentage10").addEventListener("click", () => {
  percentage = 10;
  console.log(percentage);
});

document.querySelector(".percentage15").addEventListener("click", () => {
  percentage = 15;
  console.log(percentage);
});

document.querySelector(".percentage25").addEventListener("click", () => {
  percentage = 25;
  console.log(percentage);
});

document.querySelector(".percentage50").addEventListener("click", () => {
  percentage = 50;
  console.log(percentage);
});
// end calculation

//

// reset button
resetbtn.addEventListener("click", function () {
  // reset values
  sumeValue = 0;
  percentage = 0;
  people_numberValue = 0;
  numberOfPercentage = 0;
  TotalAmount = 0;
  tip_amount.innerHTML = "$" + numberOfPercentage;
  total_amount.innerHTML = "$" + TotalAmount;
  //

  // reset input
  sume.value = 0;
  people_number.value = 0;
  //

  // print
  console.log(sumeValue);
  console.log(people_numberValue);
  console.log(percentage);
  //
});
// end reset button
