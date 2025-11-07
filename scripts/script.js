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

function addToBasket(name, price) {
   let refOrder = document.getElementsByClassName("food-order");
   let refPrice = document.getElementsByClassName("food-price");
    refOrder[0].innerHTML += addNametoBasketTemplate(name);
    refPrice[0].innerHTML += addPricetoBasketTemplate(price).replace(".",",");
}

function addNametoBasketTemplate(name){
    return `<p>${name}</p>
    `
}

function addPricetoBasketTemplate(price) {
    return `<p>${price.toFixed(2)}</p>
    `
}