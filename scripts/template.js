 function renderDishesTemplate(i) {
    return `<div class="rendered-dishes"><h4>${dishes[0]["Neapolitanische Pizzen"][i].name}</h4>
             <p>${dishes[0]["Neapolitanische Pizzen"][i].price}</p>
             <p>${dishes[0]["Neapolitanische Pizzen"][i].description}<p/></div>
             <div><button id="dishes-add-button"></button></div>`
 }
function renderDessertsTemplate(i) {
     return `<div <h4>${dishes[0].Desserts[i].name}</h4>
             <p>${dishes[0].Desserts[i].price}</p>
             <p>${dishes[0].Desserts[i].description}<p/></div>
             <div><button id="dishes-add-button"></button></div>`
}
 function renderDrinksTemplate(i) {
    return `<div <h4>${dishes[0].Getränke[i].name}</h4>
             <p>${dishes[0].Getränke[i].price}</p>
             <p>${dishes[0].Getränke[i].description}<p/></div>
             <div><button id="dishes-add-button"></button></div>`
 }