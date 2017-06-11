function addToCart(cid){
    var count=0, flag=false;
    item=ItemsArray[cid];
    shopListItem = localStorage.getItem("shoppingList");
    shopListItem == null ? shopListItem=[] : shopListItem =JSON.parse(shopListItem);
    for(var i=0;i<shopListItem.length;i++){ 
        if(item.id==shopListItem[i].id){
            flag=true;
            break;
        }
        else
        count++;
    }
    flag==true ? (shopListItem[count].quantity++,calTotal(count)) : (item.quantity++, shopListItem.push(item),calTotal(shopListItem.length-1));
    localStorage.setItem("shoppingList",JSON.stringify(shopListItem));
    
}
function calTotal(index){
shopListItem[index].totalPrice=shopListItem[index].quantity*shopListItem[index].price;
return shopListItem[index].totalPrice;
}