//Selecting Add button
var addbutton = document.getElementsByClassName("add");
for (var i = 0; i < addbutton.length; i++) {
  var button = addbutton[i]
  button.addEventListener("click", funkcjaDodaj);
}

//Button Add clicked - Adding product to the basket
function funkcjaDodaj(event) {
  var button = event.target
  var shopitem = button.parentElement.parentElement.parentElement
  var productprice = shopitem.getElementsByClassName("price")[0].innerText;
  var productname = shopitem.getElementsByClassName("name")[0].innerText;
  var productlist = document.getElementById("productlist");
  var productrow = document.createElement('div');
  productrow.classList.add('productrow');
  var productinbasket = `
    <div class="cart-item price">
    <span class="title">Nazwa: ${productname}<br></span>
    </div>
    <div>
    <span class="cart-price">${productprice}</span>
    </div>
    <div class="rem">
    <button class="removebutton rembutton" type="button">Usuń</button>
    </div>`
    productrow.innerHTML = productinbasket;
    productlist.append(productrow);
    // Adding Event Listener to Remove Button
    productrow.getElementsByClassName("removebutton")[0].addEventListener("click", removeitem)
    updateTotal()
}

// Updating Total Sum
function updateTotal() {
  var productrows = document.getElementsByClassName("productrow")
  var total = 0
  for (var i = 0; i < productrows.length; i++) {
    var oneItem = productrows[i]
    var priceItem = oneItem.getElementsByClassName('cart-price')[0]
    var price = parseFloat(priceItem.innerText.replace('zł', ''))
    console.log(price)
    total = total + price
  }
  document.getElementsByClassName('totalsum')[0].innerText = total + "Zł"
}

// Displaying Alert after clicking buy button
var buybutton = document.getElementById("buy");
buybutton.addEventListener("click", funkcjaKup);
function funkcjaKup() {
  var totalsum =  document.getElementsByClassName("totalsum")[0]
  var price = parseFloat(totalsum.innerText)
  window.alert ("Dokonałeś zakupu na kwotę: " + price + " zł");
}


// Removing item from the basket
function removeitem(event) {
  rem = event.target
  rem.parentElement.parentElement.remove();
  console.log("element usuniety");
  updateTotal();
  }


// Clearing product list in the basket
var clearbutton = document.getElementById("clear");
clearbutton.addEventListener('click', funkcjaClear);
function funkcjaClear() {
  var productlist = document.getElementById("productlist");
  var clear = '';
  productlist.innerHTML = clear;
  updateTotal()
}

