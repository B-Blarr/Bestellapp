function renderDishesTemplate(i) {
  return `<section class="dish-article">
           <div class="rendered-dishes">
            <h4>${dishes[0]["Neapolitanische Pizzen"][i].name}</h4>
            <p>${dishes[0]["Neapolitanische Pizzen"][i].price.toFixed(2)} €</p>
            <p>${dishes[0]["Neapolitanische Pizzen"][i].description}<p/>
           </div>
           <div>
            <button onclick="addToBasket('pizza', '${
              dishes[0]["Neapolitanische Pizzen"][i].name
            }', ${dishes[0]["Neapolitanische Pizzen"][i].price}, ${i})" 
            class="dishes-add-button"><img src="../assets/icon/plus.png" alt="Hinzufügen_Button"></button>
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
             <button onclick="addToBasket('dessert', '${
               dishes[0].Desserts[i].name
             }', ${dishes[0].Desserts[i].price}, ${i})" 
             class="dishes-add-button"><img src="../assets/icon/plus.png" alt="Hinzufügen_Button"></button>
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
            <button onclick="addToBasket('drinks', '${
              dishes[0].Getränke[i].name
            }', ${dishes[0].Getränke[i].price}, ${i} )" 
            class="dishes-add-button"><img src="../assets/icon/plus.png" alt="Hinzufügen_Button"></button>
           </div>
          </section>`;
}

function addDishtoBasketTemplate(type, name, price, i) {
  if (document.getElementById(`dish-counter-${type}-${i}`)) {
    return "";
  } else
    return `
  <div class="dish-summary-${type}-${i} basket-first-part">
     <span>${name}</span> 
     <div class="basket-second-part">
     <div class="basket-counter-price"></div>
     <button onclick="minusToCounter('${type}', ${i})" class="basket-minus-button"></button>
     <span id="dish-counter-${type}-${i}"></span> 
     <button onclick="addToCounter('${type}', ${i})" class="basket-plus-button"></button>
    
     <span class="dish-price-${type}-${i}">${price.toFixed(2).replace(".", ",")}</span>
     <button onclick="deleteDish('${type}', ${i})" class="delete-button"></button>   
  </div>
`;
}
//  Funktion price * counter