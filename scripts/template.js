function renderDishesTemplate(i) {
  return `<section class="dish-article">
           <div class="rendered-dishes">
            <h4>${dishes[0]["Neapolitanische Pizzen"][i].name}</h4>
            <p>${dishes[0]["Neapolitanische Pizzen"][i].price.toFixed("2")}</p>
            <p>${dishes[0]["Neapolitanische Pizzen"][i].description}<p/>
           </div>
           <div>
            <button class="dishes-add-button"><img src="../assets/icon/plus.png" alt="Hinzufügen_Button"></button>
           </div>
          </section>`;
}

function renderDessertsTemplate(i) {
  return `<section class="dish-article">
            <div class="rendered-dishes" 
             <h4>${dishes[0].Desserts[i].name}</h4>
             <p>${dishes[0].Desserts[i].price.toFixed("2")}</p>
             <p>${dishes[0].Desserts[i].description}<p/>
            </div>
            <div>
             <button class="dishes-add-button"><img src="../assets/icon/plus.png" alt="Hinzufügen_Button"></button>
            </div>
          </section>`;
}

function renderDrinksTemplate(i) {
  return `<section class="dish-article">
           <div class="rendered-dishes" 
            <h4>${dishes[0].Getränke[i].name}</h4>
            <p>${dishes[0].Getränke[i].price.toFixed("2")}</p>
            <p>${dishes[0].Getränke[i].description}<p/>
           </div>
           <div>
            <button class="dishes-add-button"><img src="../assets/icon/plus.png" alt="Hinzufügen_Button"></button>
           </div>
          </section>`;
}
