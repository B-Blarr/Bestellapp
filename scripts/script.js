function renderAll(){
renderDishes();
renderDesserts();
renderDrinks();
}

function renderDishes() {
    let refArticle = document.getElementById("main-dishes"); 
    for (let i = 0; i < dishes[0]["Neapolitanische Pizzen"].length; i++) {
        refArticle.innerHTML += renderDishesTemplate(i).replaceAll(".",",");
    }
}

function renderDesserts(){
    let refArticle = document.getElementById("desserts");
    for (let i = 0; i < dishes[0].Desserts.length; i++) {
        refArticle.innerHTML += renderDessertsTemplate(i).replaceAll(".",",");
    }
}

 function renderDrinks() {
    let refArticle = document.getElementById("drinks");
    for (let i = 0; i < dishes[0].Getränke.length; i++) {
        refArticle.innerHTML += renderDrinksTemplate(i);
    }
 }

