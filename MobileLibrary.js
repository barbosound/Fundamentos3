"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.getMobiles = function (index) {
        return this.mobiles[index];
    };
    MobileLibrary.prototype.setTrademark = function (index, value) {
        this.mobiles[index] = value;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setTotalPrice = function (price) {
        this.totalPrice = price;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var total = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            total += this.mobiles[i].getPrice();
        }
        return total;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log('This is all my mobiles:\n');
        for (var i = 0; i < this.mobiles.length; i++) {
            this.mobiles[i].print();
        }
        console.log('Price overall: ' + this.totalPrice);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
