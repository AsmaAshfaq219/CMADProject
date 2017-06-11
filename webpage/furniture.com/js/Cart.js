
var f = false, subtotal = 0, shipPrice = 0, grandTotal = 0;
var shopListItem = localStorage.getItem("shoppingList");
shopListItem != null ? (shopListItem = JSON.parse(shopListItem), f = true) : false;
function fillTable() {
    if (f == true) {
        for (var i = 0; i < shopListItem.length; i++)
            document.getElementById('cartTable').innerHTML += '<tr><td class="prodImage"><img src="' + shopListItem[i].image + '" alt="image"/></td><td class="prodName">' + shopListItem[i].id + " " + shopListItem[i].name + '</td><td class="prodPrice" id="prodPrice">$' + shopListItem[i].price + '</td><td class="add"><button onClick="decUpdate(' + i + ')"><i class="fa fa-minus" aria-hidden="true"></i></button><div class="quantity" id="q' + i + '">' + shopListItem[i].quantity + '</div><button onClick="incUpdate(' + i + ');"><i class="fa fa-plus" aria-hidden="true"></i></button></td><td class="prodPriceQ" id="totalPrice' + i + '">$' + shopListItem[i].totalPrice + '</td><td class="delete" ><button onClick="removeItem(' + i + ');"><i class="fa fa-times-circle fa-lg" aria-hidden="true"></i></button></td></tr>';
    }
    else
     hideShow();
    majorTotal();
    document.getElementById('billTable').innerHTML = '<tr><td>Sub Total</td><td id="subTotal">$ ' + subtotal + '</td></tr><tr><td>Shipping Price</td><td id="ship">$ ' + shipPrice + '</td></tr><tr><td class="lastRow">Grand Total</td><td class="lastRow" id="grandTotal">$ ' + grandTotal + '</td> </tr>';
}
function incUpdate(cid) {
    shopListItem[cid].quantity++;
    calTotal(cid);
    localStorage.setItem("shoppingList", JSON.stringify(shopListItem));
    cartUpdate(cid);
}
function decUpdate(cid) {
    var quan = shopListItem[cid].quantity--;
    calTotal(cid);
    quan > 0 ? localStorage.setItem("shoppingList", JSON.stringify(shopListItem)) : removeItem(cid);
    cartUpdate(cid);
}
function cartUpdate(cid) {
    document.getElementById('q' + cid).innerHTML = shopListItem[cid].quantity;
    document.getElementById('totalPrice' + cid).innerHTML = "$" + shopListItem[cid].totalPrice;
    majorTotal();
    document.getElementById('subTotal').innerHTML = "$ " + subtotal;
    document.getElementById('grandTotal').innerHTML = "$ " + grandTotal;
    document.getElementById('ship').innerHTML = "$ " + shipPrice;
}
function removeItem(cid) {
    shopListItem.splice(cid, 1);
    localStorage.setItem("shoppingList", JSON.stringify(shopListItem));
    document.getElementById('cartTable').innerHTML = "";
    fillTable();
}
function majorTotal() {
    subtotal = 0; grandTotal = 0;
    for (var i = 0; i < shopListItem.length; i++)
        subtotal += shopListItem[i].totalPrice;
    subtotal != 0 ? shipPrice = 10*shopListItem.length : shipPrice = 0;
    grandTotal = subtotal + shipPrice;
}
function clearCart() {
    localStorage.removeItem("shoppingList");
    hideShow();
}
function hideShow(){
    var ref = document.getElementById('clearCart');
    var refOut= document.getElementById('checkOut');
    shopListItem2 = localStorage.getItem("shoppingList");
    shopListItem2 == null || shopListItem == [] ? (ref.className="hide",refOut.className="hide"): (ref.className="show" , refOut.className="show"); 
    document.getElementById('cartTable').innerHTML = "List is Empty";
    document.getElementById('billTable').innerHTML = "";
}