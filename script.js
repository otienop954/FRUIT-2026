document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/fruits")
    .then(res => res.json())
    .then(fruits => {
      const grid = document.querySelector(".fruit-grid");
      grid.innerHTML = "";

      fruits.forEach(fruit => {
        const card = document.createElement("div");
        card.className = "fruit-card";

        card.innerHTML = `
          <img src="${fruit.image}" alt="${fruit.name}">
          <div class="price">${fruit.name} – ${fruit.price}</div>
          <button class="buy-btn" onclick="orderFruit('${fruit.name}')">
            Buy
          </button>
        `;

        grid.appendChild(card);
      });
    });
});

function orderFruit(fruitName) {
  alert("You selected: " + fruitName);
}
function orderFruit(fruitName) {
  const customerName = prompt("Enter your name:");
  const phone = prompt("Enter your phone number:");

  if (!customerName || !phone) {
    alert("Order cancelled");
    return;
  }

  fetch("http://localhost:3000/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      fruit: fruitName,
      name: customerName,
      phone: phone
    })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
  })
  .catch(() => {
    alert("Error placing order");
  });
}
