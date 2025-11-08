let refCounter = 0;

function renderAll(){
renderDishes();
renderDesserts();
renderDrinks();
}

function renderDishes() {
    let refArticle = document.getElementById("main-dishes"); 
    for (let i = 0; i < dishes[0]["Neapolitanische Pizzen"].length; i++) {
        refArticle.innerHTML += renderDishesTemplate(i).replace(".",",");
    }
}

function renderDesserts(){
    let refArticle = document.getElementById("desserts");
    for (let i = 0; i < dishes[0].Desserts.length; i++) {
        refArticle.innerHTML += renderDessertsTemplate(i).replace(".",",");
    }
}

 function renderDrinks() {
    let refArticle = document.getElementById("drinks");
    for (let i = 0; i < dishes[0].Getränke.length; i++) {
        refArticle.innerHTML += renderDrinksTemplate(i).replace(".",",");
    }
 }
 
function addToBasket(type, name, price, i) {
   let refOrder = document.getElementsByClassName("food-order")[0];
    refOrder.innerHTML += addDishtoBasketTemplate(type, name, price, i);
    addToCounter(type, i)
}

function addToCounter(type, i) {
   
    refCounter = document.getElementById(`dish-counter-${type}-${i}`);
    refCounter.textContent ++;
}
