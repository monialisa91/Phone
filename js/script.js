function Phone(brand, price, color, weight, ram) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.weight = weight;
	this.ram = ram;

}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.priceDiscount = function(discount) {
	var price = this.price * (1-discount);
	this.price = price;
}

var iPhone6S = new Phone("Apple", 2250, "white", 143, 2);
var samsungGalaxyS6 = new Phone("Samsung", 1390, "silver", 138, 3);
var onePlusOne = new Phone("OnePlus", 999, "black", 162, 3);

var phone = new Phone("Htc", 1000, "blue", 140, 4);

phone.printInfo();
phone.priceDiscount(0.1);
phone.printInfo();