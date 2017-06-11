//constructor
function item(id, name, image, price, quantity, colors) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.colors = colors;
    this.totalPrice=0;
}
//Item Objects
var item1 = new item("td1", "fun 01", "images/f1.jpg", 250, 0, ["Country Yellow", "Dark Brown"]);
var item2 = new item("td2", "fun 02", "images/f2.jpg", 150, 0, ["White"]);
var item3 = new item("td3", "fun 03", "images/f3.jpg", 170, 0, ["Country Tan", "Black"]);
var item4 = new item("td4", "fun 04", "images/f4.jpg", 50, 0, ["Dark Brown"]);
var item5 = new item("td5", "fun 05", "images/f5.jpg", 75, 0, ["Country Yellow", "Dark Brown"]);
var item6 = new item("td6", "fun 06", "images/f6.jpg", 350, 0, ["White"]);
var item7 = new item("td7", "fun 07", "images/f7.jpg", 150, 0, ["Country Tan"]);
var item8 = new item("td8", "fun 08", "images/f8.jpg", 360, 0, ["Country Tan", "Black"]);
var item9 = new item("td9", "fun 09", "images/f9.jpg", 250, 0, ["Country Brown"]);
var ItemsArray = [item1, item2, item3, item4, item5, item6, item7, item8, item9];
