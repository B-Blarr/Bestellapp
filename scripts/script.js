
let subtotal = 0;
const dialogRef = document.getElementById("confirmation-dialog");

function renderAll() {
  renderDishes();
  renderDesserts();
  renderDrinks();
  updateSubtotal();
}

function updateSubtotal() {
  const subtotalCell = document.getElementById("subtotal");
  if (subtotal <= 0) {
    subtotalCell.innerText = "0,00 €";
  } else {
    subtotalCell.innerText = subtotal.toFixed(2).replace(".", ",") + " €";
  }
}

function renderDishes() {
  const refArticle = document.getElementById("main-dishes");
  for (let i = 0; i < dishes[0]["Neapolitanische Pizzen"].length; i++) {
    refArticle.innerHTML += renderDishesTemplate(i).replace(".", ",");
  }
}

function renderDesserts() {
  const refArticle = document.getElementById("desserts");
  for (let i = 0; i < dishes[0].Desserts.length; i++) {
    refArticle.innerHTML += renderDessertsTemplate(i).replace(".", ",");
  }
}

function renderDrinks() {
  const refArticle = document.getElementById("drinks");
  for (let i = 0; i < dishes[0].Getränke.length; i++) {
    refArticle.innerHTML += renderDrinksTemplate(i).replace(".", ",");
  }
}

function addToBasket(type, name, price, i) {
  const refOrder = document.getElementsByClassName("food-order")[0];
  refOrder.innerHTML += addDishtoBasketTemplate(type, name, price, i);
  addToCounter(type, price, i);
}

function addToCounter(type, price, i) {
  const refCounter = document.getElementById(`dish-counter-${type}-${i}`);
  refCounter.textContent++;
  calcDishPrice(type, i);
  subtotal += price;
  updateSubtotal();
  updateTotalPrice();
}

function minusToCounter(type, price, i) {
  const refCounter = document.getElementById(`dish-counter-${type}-${i}`);
  refCounter.textContent--;
  calcDishPrice(type, i);
  subtotal -= price;
  //   if (subtotal < 0) subtotal = 0;
  updateSubtotal();
  updateTotalPrice();
  if (refCounter.textContent == 0) {
    deleteDish(type, price, i);
  }
}

function deleteDish(type, price, i) {
  const counterRef = document.getElementById(`dish-counter-${type}-${i}`);
  let count = 0;
  if (counterRef) {
    count = Number(counterRef.innerText);
  }
  if (count > 0) {
    subtotal -= count * price;
    // if (subtotal < 0) subtotal = 0;
    updateSubtotal();
    updateTotalPrice();
  }
  const dishSummary = document.getElementById(`dish-summary-${type}-${i}`);
  if (dishSummary) {
    dishSummary.remove();
  }
}

function calcDishPrice(type, i) {
  const counterRef = document.getElementById(`dish-counter-${type}-${i}`).innerText;
  const counterRefNumber = Number.parseFloat(counterRef);
  let multipliedPriceRef = document.getElementsByClassName(`dish-price-${type}-${i}`)[0];
  multipliedPriceRef.innerText = "";
  const priceForOne = getPrice(type, i);
  const calcPrice = counterRefNumber * priceForOne;
  multipliedPriceRef.innerText += calcPrice.toFixed(2).replace(".", ",");
}

function getPrice(type, i) {
  const category = getCategoryKey(type);
  return dishes[0][category][i].price;
}

function getCategoryKey(type) {
  if (type === "pizza") return "Neapolitanische Pizzen";
  if (type === "dessert") return "Desserts";
  if (type === "drinks") return "Getränke";
}

function updateTotalPrice() {
  const refTotalPrice = document.getElementById("total-price");
  const subtotalCell = document.getElementById("subtotal").innerText.replace(",", ".");
  const subtotalCellNum = Number.parseFloat(subtotalCell);
  const newPrice = subtotalCellNum + 5;
  if (subtotalCellNum == 0) {
    refTotalPrice.innerText = "0,00 €";
  } else {
    refTotalPrice.innerText = newPrice.toFixed(2).replace(".", ",");
    refTotalPrice.innerText = refTotalPrice.innerText + " €";
  }
}

function order() {
  const refBasket = document.getElementsByClassName("food-order")[0];
  const refTotalPrice = document.getElementById("total-price");
  const refSubtotal = document.getElementById("subtotal");
  if (subtotal == 0) {
    return;
  }else
  {
  refBasket.innerHTML = "";
  subtotal = 0;
  refSubtotal.innerText = "0,00 €";
  refTotalPrice.innerText = "0,00 €";
  openConfirmationDialog();
}
}

function openConfirmationDialog() {
  const dialogRef = document.getElementById("confirmation-dialog");
  dialogRef.showModal();
}

function closeDialog() {
dialogRef.close();
}

function closeDialogClickOutside(event) {
  if (event.target === dialogRef) {
    dialogRef.close();
  }
}
dialogRef.addEventListener("click", closeDialog);

