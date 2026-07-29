const container = document.querySelector(".container");

const contentHeader = document.querySelector(".content-header");

const formSection = document.querySelector(".form-section");
const nameGroup = document.querySelector(".nameDiv");
const inputName = document.querySelector("#inputName");
const priceGroup = document.querySelector(".priceDiv");
const inputPrice = document.querySelector("#inputPrice");

const addButton = document.querySelector(".button-group button");

const cartSection = document.querySelector(".cart-section");
const cartTable = document.querySelector(".cart-table");
const cartFooter = document.querySelector(".cart-footer-div");

const total = document.querySelector(".total-p");
const totalSpan = document.querySelector(".totalSpan");

let runningTotal = 0;

addButton.addEventListener("click", () => {
  const productName = inputName.value;
  const productPrice = inputPrice.value;

  if (productName === "") {
    alert("What do you want to buy?");
  } else if (productPrice === "") {
    alert("write down the price, must be a number!");
  } else {
    const priceValue = parseFloat(productPrice);
    let quantity = 1;

    const newProduct = document.createElement("div");
    newProduct.className = "newProduct";
    const newPName = document.createElement("h3");
    newPName.textContent = productName;
    const newPPrice = document.createElement("p");
    newPPrice.textContent = `$${productPrice}`;
    const minusBtn = document.createElement("button");
    minusBtn.textContent = "-";
    minusBtn.className = "minusBtn";
    const currentQuantity = document.createElement("span");
    currentQuantity.textContent = `${quantity}`;

    const plusBtn = document.createElement("button");
    plusBtn.textContent = "+";
    plusBtn.className = "plusBtn";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    minusBtn.addEventListener("click", (event) => {
      if (quantity > 1) {
        quantity--;
        currentQuantity.textContent = quantity;
        runningTotal -= priceValue;
        totalSpan.textContent = `$${runningTotal.toFixed(2)}`;
      }
    });

    plusBtn.addEventListener("click", (event) => {
      quantity++;
      currentQuantity.textContent = quantity;

      runningTotal += priceValue;
      totalSpan.textContent = `$${runningTotal.toFixed(2)}`;
    });

    deleteBtn.addEventListener("click", () => {
      runningTotal -= priceValue * quantity;
      totalSpan.textContent = `$${runningTotal.toFixed(2)}`;
      newProduct.remove();
    });

    newProduct.appendChild(newPName);
    newProduct.appendChild(newPPrice);
    newProduct.appendChild(minusBtn);
    newProduct.appendChild(currentQuantity);
    newProduct.appendChild(plusBtn);
    newProduct.appendChild(deleteBtn);
    cartTable.appendChild(newProduct);

    calculateTotal(priceValue);
  }

  inputName.value = "";
  inputPrice.value = "";
});

inputName.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});

inputPrice.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});

function calculateTotal(priceValue) {
  if (priceValue > 0) {
    runningTotal += priceValue;

    totalSpan.textContent = `$${runningTotal.toFixed(2)}`;
  }
}
