const userCardTemplate = document.querySelector("[data-user-template]");
const userCardsContainer = document.querySelector(
  "[data-user-cards-container]"
);
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];

      const userName = card.querySelector("[data-user-name]");
      const userEmail = card.querySelector("[data-user-email]");

      userName.textContent = user.name;
      userEmail.textContent = user.email;

      userCardsContainer.append(card);

      return {
        name: user.name,
        email: user.email,
        element: card,
      };
    });
  });
