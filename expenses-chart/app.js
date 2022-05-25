const template = document.querySelector(".template");
const chartCard = document.querySelector(".chart-card");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const cow = template.content.cloneNode(true).children[0];

      cow.children[2].textContent = element.day;
      cow.children[1].style.height = 2 * element.amount + "px";
      cow.children[0].textContent = element.amount;
      console.log(cow);

      chartCard.append(cow);

      cow.children[1].addEventListener("click", (eachChart) => {
        if (eachChart.target.classList.contains("chart-active")) {
          eachChart.target.classList.remove("chart-active");
          cow.children[0].classList.add("hide");
        } else {
          eachChart.target.classList.add("chart-active");
          cow.children[0].classList.remove("hide");
        }
      });
    });
  });
