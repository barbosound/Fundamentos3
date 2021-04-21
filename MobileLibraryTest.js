"use strict";
exports.__esModule = true;
var MobileLibrary_1 = require("../Fundamentos3/MobileLibrary");
var mobile_1 = require("../Fundamentos2/mobile");
var array = new Array();
array = [
    new mobile_1.Mobile("Nokia", "Nokia3210", "Nokia", 20, "Negro", false, 1, 50),
    new mobile_1.Mobile("iPhone", "iPhone3G", "Apple", 20, "Blanco", false, 2, 1000),
    new mobile_1.Mobile("Samsung", "Samsung Galaxy 10", "Samsung", 20, "Rojo", true, 2, 500),
    new mobile_1.Mobile("Samsung", "Samsung Galaxy 10", "Samsung", 20, "Rojo", true, 2, 500)
];
var library = new MobileLibrary_1.MobileLibrary("NokiaLibrary", "Japan", array);
console.log(library.totalPriceCalculation());
