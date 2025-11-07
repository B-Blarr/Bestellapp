function renderAll(){
renderDishes();
renderDesserts();
// renderDrinks();
}

function renderDishes() {
    let refArticle = document.getElementById("main-dishes");
    
    for (let i = 0; i < dishes[0]["Neapolitanische Pizzen"].length; i++) {
        refArticle.innerHTML += renderDishesTemplate(i).replaceAll(".",",");
    }
}

 function renderDishesTemplate(i) {
    return `<div class="rendered-dishes"><h4>${dishes[0]["Neapolitanische Pizzen"][i].name}</h4>
             <p>${dishes[0]["Neapolitanische Pizzen"][i].price}</p>
             <p>${dishes[0]["Neapolitanische Pizzen"][i].description}<p/></div>
             <div><button id="dishes-add-button"></button></div>`
 }

function renderDesserts(){
    let refArticle = document.getElementById("desserts");
    
    for (let i = 0; i < dishes[0].Desserts.length; i++) {
        refArticle.innerHTML += renderDessertsTemplate(i).replaceAll(".",",");
    }
}

function renderDessertsTemplate(i) {
     return `<div <h4>${dishes[0].Desserts[i].name}</h4>
             <p>${dishes[0].Desserts[i].price}</p>
             <p>${dishes[0].Desserts[i].description}<p/></div>
             <div><button id="dishes-add-button"></button></div>`
}

 