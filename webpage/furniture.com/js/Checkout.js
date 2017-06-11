var shopListItem = localStorage.getItem("shoppingList");
var subtotal = 0, shipPrice = 0, grandTotal = 0;
shopListItem = JSON.parse(shopListItem);
billDisplay();
function billDisplay(){
  for(var i=0;i<shopListItem.length;i++)  
  document.getElementById('products').innerHTML+='<tr><td class="prodImage"><img src="'+shopListItem[i].image+'" alt="image"/></td><td class="prodName">'+shopListItem[i].id+" "+shopListItem[i].name+'</td><td class="quantity">'+shopListItem[i].quantity+'</td><td class="prodPriceQ">$'+shopListItem[i].price+'</td></tr>';
  majorTotal();
  document.getElementById('billTotal').innerHTML='<tr><td colspan="3" class="aligning">Sub Total</td><td>$'+subtotal+'</td></tr><tr><td colspan="3" class="aligning">Shipping & Handling</td><td>$'+shipPrice+'</td></tr><tr><td colspan="3" class="aligning">Grand Total</td><td>$'+grandTotal+'</td></tr>';
  document.getElementById('shipProc').innerHTML+="$"+shipPrice+" TCS";
}
