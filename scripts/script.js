let SubtotalNumber = 0;

let subtotal = 0;

function renderAll() {
  renderDishes();
  renderDesserts();
  renderDrinks();
  updateSubtotal();
}

function updateSubtotal() {
  const subtotalCell = document.getElementById("subtotal");
  if (subtotal <= 0) {
    subtotal = 0;
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
  //   calcDishPrice(type, i);
}

function addToCounter(type, price, i) {
  const refCounter = document.getElementById(`dish-counter-${type}-${i}`);
  refCounter.textContent++;
  calcDishPrice(type, i);
  subtotal += price;
  updateSubtotal();
}

function minusToCounter(type, price, i) {
  const refCounter = document.getElementById(`dish-counter-${type}-${i}`);
  refCounter.textContent--;
  calcDishPrice(type, i);
  subtotal -= price;
//   if (subtotal < 0) subtotal = 0;
  updateSubtotal();
  if (refCounter.textContent == 0) {
    deleteDish(type, price, i);
  }
}

function deleteDish(type, price, i) {
  const counterDish = document.getElementById(`dish-counter-${type}-${i}`);
  let count = 0;
  if (counterDish) {
    count = Number(counterDish.innerText);
  }

  if (count > 0) {
    subtotal -= count * price;
    // if (subtotal < 0) subtotal = 0;
    updateSubtotal();
  }

  const dishDiv = document.getElementById(`dish-summary-${type}-${i}`);
  if (dishDiv) {
    dishDiv.remove();
  }
}

// Funktion für den Preis zwischen den Button, der angepasst wird bei + und - und großen Hinzufügen Button
function calcDishPrice(type, i) {
  let counterRef = document.getElementById(
    `dish-counter-${type}-${i}`
  ).innerText;
  let counterRefNumber = Number.parseFloat(counterRef);
  let multipliedPriceRef = document.getElementsByClassName(
    `dish-price-${type}-${i}`
  )[0];
  multipliedPriceRef.innerText = "";
  let priceForOne = getPrice(type, i);
  let calcPrice = counterRefNumber * priceForOne;
  multipliedPriceRef.innerText += calcPrice.toFixed(2).replace(".", ",");
}

function getPrice(type, i) {
  let category = getCategoryKey(type);
  return dishes[0][category][i].price;
}

function getCategoryKey(type) {
  if (type === "pizza") return "Neapolitanische Pizzen";
  if (type === "dessert") return "Desserts";
  if (type === "drinks") return "Getränke";
}

// Zwischensumme berechnen Alle dish-price-${type}-${i}`)[0] addieren
// Evtl preis in addto counter und minustocounter mitgeben und von dort direkt Zwischensumme addiere oder subtrahiere
// Bei addtobasket auch gleich zwischensumme von dort addiere
// Funktion für Zwischensumme mache bei der einfach die übergegebenen Werte addiert werden
