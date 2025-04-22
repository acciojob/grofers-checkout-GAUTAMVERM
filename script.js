const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let total = 0;
  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  // Check if total is already displayed and remove it to avoid duplicates
  let existingTotal = document.getElementById("total");
  if (existingTotal) {
    existingTotal.remove();
  }

  // Create and show the total
  const totalElement = document.createElement("div");
  totalElement.id = "total";
  totalElement.textContent = `Total: Rs ${total}`;
  document.body.appendChild(totalElement);
};

getSumBtn.addEventListener("click", getSum);

