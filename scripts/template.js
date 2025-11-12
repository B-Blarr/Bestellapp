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
  <div id="dish-summary-${type}-${i}" class="basket-first-part">
     <span class="dish-name">${name}</span> 
     <div class="basket-second-part">
    <div class="buttons-and-counter">
     <button onclick="minusToCounter('${type}', ${price}, ${i})" class="basket-minus-button basket-button"><img src="../assets/icon/minus-button.png" alt="Minus_Button"></button>
     <span id="dish-counter-${type}-${i}"></span> 
     <button onclick="addToCounter('${type}', ${price}, ${i})" class="basket-plus-button basket-button"><img src="../assets/icon/plus.png" alt="Plus_Button"></button>
    </div>
    <div class="dish-and-euro">
     <span class="dish-price-${type}-${i}">${price.toFixed(2).replace(".", ",")}</span>
     <span class="euro"> €</span>
     </div>
     <button onclick="deleteDish('${type}',${price}, ${i})" class="delete-button basket-button"><img src="../assets/icon/delete.png" alt="Delete_Button"></button></button>   
  </div>
`;
}

function addDishtoLowWidthBasketTemplate(type, name, price, i) {
    if (document.getElementById(`low-basket-dish-counter-${type}-${i}`)) {
    return "";
  } else
    return `
  <div id="low-basket-dish-summary-${type}-${i}" class="low-basket-basket-first-part">
     <span class="low-basket-dish-name">${name}</span> 
     <div class="low-basket-second-part">
    <div class="buttons-and-counter">
     <button onclick="minusToCounter('${type}', ${price}, ${i})" class="basket-minus-button basket-button"><img src="../assets/icon/minus-button.png" alt="Minus_Button"></button>
     <span id="low-basket-dish-counter-${type}-${i}"></span> 
     <button onclick="addToCounter('${type}', ${price}, ${i})" class="basket-plus-button basket-button"><img src="../assets/icon/plus.png" alt="Plus_Button"></button>
    </div>
    <div class="dish-and-euro">
     <span class="low-basket-dish-price-${type}-${i}">${price.toFixed(2).replace(".", ",")}</span>
     <span class="euro"> €</span>
     </div>
     <button onclick="deleteDish('${type}',${price}, ${i})" class="delete-button basket-button"><img src="../assets/icon/delete.png" alt="Delete_Button"></button></button>   
  </div>
`;
}
