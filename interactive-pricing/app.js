const rangeValue = document.getElementById("range-input");
const timeValue = document.getElementById("year-input");
const price = document.getElementById("current-price");
const year = document.getElementById("current-year");
const view = document.getElementById("view");

rangeValue.addEventListener("change", (e) => {
  view.textContent = e.target.value;

  rangeValue.addEventListener("change", (e) => {
    if (e.target.checked) {
      priceCalculator(view.textContent * 0.5);
      year.textContent = "/year";
    } else {
      priceCalculator(view.textContent * 2);
      year.textContent = "/month";
    }
  });
});
timeValue.addEventListener("click", (e) => {
  if (e.target.checked) {
    priceCalculator(view.textContent * 0.5);
    year.textContent = "/year";
  } else {
    priceCalculator(view.textContent * 2);
    year.textContent = "/month";
  }
});

const priceCalculator = (value) => {
  price.textContent = value;
};
