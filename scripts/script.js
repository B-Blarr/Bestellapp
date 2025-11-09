let refCounter = 0;
let SubtotalNumber = 0;

function renderAll() {
  renderDishes();
  renderDesserts();
  renderDrinks();
}

function renderDishes() {
  let refArticle = document.getElementById("main-dishes");
  for (let i = 0; i < dishes[0]["Neapolitanische Pizzen"].length; i++) {
    refArticle.innerHTML += renderDishesTemplate(i).replace(".", ",");
  }
}

function renderDesserts() {
  let refArticle = document.getElementById("desserts");
  for (let i = 0; i < dishes[0].Desserts.length; i++) {
    refArticle.innerHTML += renderDessertsTemplate(i).replace(".", ",");
  }
}

function renderDrinks() {
  let refArticle = document.getElementById("drinks");
  for (let i = 0; i < dishes[0].Getränke.length; i++) {
    refArticle.innerHTML += renderDrinksTemplate(i).replace(".", ",");
  }
}

function addToBasket(type, name, price, i) {
  let refOrder = document.getElementsByClassName("food-order")[0];
  refOrder.innerHTML += addDishtoBasketTemplate(type, name, price, i);
  addToCounter(type, price, i);
  calcDishPrice(type, i);
}

function addToCounter(type, price, i) {
  refCounter = document.getElementById(`dish-counter-${type}-${i}`);
  refCounter.textContent++;
  calcDishPrice(type, i);
  addPriceToSubtotal(price);
}

function minusToCounter(type, i) {
  refCounter = document.getElementById(`dish-counter-${type}-${i}`);
  refCounter.textContent--;
  calcDishPrice(type, i);
  if (refCounter.textContent < 1) {
    deleteDish(type, i);
  }
}

function deleteDish(type, i) {
  refDish = document.getElementsByClassName(`dish-summary-${type}-${i}`)[0];
  refDish.innerHTML = "";
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
  return (actualPrice = dishes[0][category][i].price);
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

function addPriceToSubtotal(price) {
  SubtotalNumber = SubtotalNumber + price;
  let refSubtotal = document.getElementById("subtotal");
  refSubtotal.innerText = SubtotalNumber.toFixed(2).replace(".", ",");
}
// .toFixed(2).replace(".", ",")
