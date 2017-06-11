var index = localStorage.getItem("prodItem");
imageSetup();
infoSetup();
function imageSetup(){
    document.getElementById('miniTable').innerHTML+="<tr><td><img src="+ItemsArray[index].image+" alt='image'/></td</tr>";
    document.getElementById('bigPicture').innerHTML+="<img src="+ItemsArray[index].image+" alt='image'/>";
}
function infoSetup(){
    document.getElementById('prodName').innerText+=ItemsArray[index].id+" "+ItemsArray[index].name;
    document.getElementById('prodPrice').innerText+="$ "+ItemsArray[index].price;
    for(var i=0;i<ItemsArray[index].colors.length;i++){
    document.getElementById('colorsAvail').innerHTML+="<li>"+ItemsArray[index].colors[i]+"</li>";
    document.getElementById('addtoList').innerHTML="<button class='addtoList' onClick='addToCart("+index+");'><a href='cart.html'>Add to List</a></button>";
    }
}