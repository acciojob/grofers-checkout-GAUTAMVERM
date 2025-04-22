const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let total = 0;
  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  const ans = document.getElementById("ans");
  ans.textContent = total;
};

getSumBtn.addEventListener("click", getSum);

