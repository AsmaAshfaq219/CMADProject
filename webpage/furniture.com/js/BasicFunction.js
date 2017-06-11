var shopListItem=[];
displayItems();
function displayItems(){
    for(var i=0;i<ItemsArray.length;i++){
    document.getElementById("pitemsId").innerHTML+="<div id='t"+i+"' class='pitemDiv' onMouseover='displayInfo("+i+");' onMouseout='backToDefault("+i+");'><img src='"+ItemsArray[i].image+"' alt='image'/><button class='viewButton' id='view"+i+"' onClick='prodInfoPg("+i+");' onMouseover='prodId("+i+");'><a href='productitem.html'>View</a></button><div class='itemInfo'><h5>"+ItemsArray[i].name+"</h5><h4> $"+ItemsArray[i].price+"</h4><span class='popup' onClick='popupNotify("+i+")'><button class='buy' onClick='addToCart("+i+");'><i class='fa fa-cart-plus fa-2x' aria-hidden='true'></i></button><span id='added"+i+"' class='popupBox'>Product Added</span></span></div>";
}
}
function displayInfo(cid){
    document.getElementById('view'+cid).className="viewButtonA";
   document.getElementById('t'+cid).className="pitemHover pitemDivH";
}
function backToDefault(cid){
   document.getElementById('view'+cid).className="viewButton";
   document.getElementById('t'+cid).className="pitemDiv";
}
function prodInfoPg(cid){
    window.location.href="productitem.html";
}
function prodId(cid){
    localStorage.setItem("prodItem",cid);
}
function popupNotify(cid){
   document.getElementById('added'+cid).classList.add("showPopup");
   setTimeout(function(){document.getElementById('added'+cid).classList.remove("showPopup")},2000);
}