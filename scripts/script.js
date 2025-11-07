
function renderDishes() {
    let refArticle = document.getElementById("main-dishes");
    
    for (let i = 0; i < dishes[0]["Neapolitanische Pizzen"].length; i++) {
        refArticle.innerHTML += renderDishesTemplate(i);
    }
}

 function renderDishesTemplate(i) {
    return `<h4>${dishes[0]["Neapolitanische Pizzen"][i].name}</h4>
             <p>${dishes[0]["Neapolitanische Pizzen"][i].price}</p>
             <p>${dishes[0]["Neapolitanische Pizzen"][i].description}<p/>`
 }



   
 