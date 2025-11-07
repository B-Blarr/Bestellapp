function renderDishesTemplate(i) {
  return `<section class="dish-article">
           <div class="rendered-dishes">
            <h4>${dishes[0]["Neapolitanische Pizzen"][i].name}</h4>
            <p>${dishes[0]["Neapolitanische Pizzen"][i].price.toFixed(2)} €</p>
            <p>${dishes[0]["Neapolitanische Pizzen"][i].description}<p/>
           </div>
           <div>
            <button onclick=addToBasket(i) class="dishes-add-button"><img src="../assets/icon/plus.png" alt="Hinzufügen_Button"></button>
           </div>
          </section>`;
}

function renderDessertsTemplate(i) {
  return `<section class="dish-article">
            <div class="rendered-dishes"> 
             <h4>${dishes[0].Desserts[i].name}</h4>
             <p>${dishes[0].Desserts[i].price.toFixed(2)} €</p>
             <p>${dishes[0].Desserts[i].description}<p/>
            </div>
            <div>
             <button onclick=addToBasket(i) class="dishes-add-button"><img src="../assets/icon/plus.png" alt="Hinzufügen_Button"></button>
            </div>
          </section>`;
}

function renderDrinksTemplate(i) {
  return `<section class="dish-article">
           <div class="rendered-dishes"> 
            <h4>${dishes[0].Getränke[i].name}</h4>
            <p>${dishes[0].Getränke[i].price.toFixed(2)} €</p>
            <p>${dishes[0].Getränke[i].description}<p/>
           </div>
           <div>
            <button onclick="addToBasket('${dishes[0].Getränke[i].name}', ${dishes[0].Getränke[i].price} )" class="dishes-add-button"><img src="../assets/icon/plus.png" alt="Hinzufügen_Button"></button>
           </div>
          </section>`;
}

function addDishtoBasketTemplate(name, price){
   return `
  <div class="dish-summary basket-first-part">
     <div>${name}</div> 
     <div class="basket-second-part">
     <div class="basket-counter-price"></div>
     <button class="basket-minus-button"></button>
     <li class="dish-counter"></li> 
     <button class="basket-plus-button"></button>
     <li class="dish-price">${price.toFixed(2).replace(".",",")}</li>
     <button class="delete-button"></button>   
  </div>
` 
}