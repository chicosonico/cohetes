"use strict";
var Motor = /** @class */ (function () {
    function Motor(power) {
        this.power = power;
    }
    Motor.prototype.increasePower = function () {
        this.power += 10;
    };
    Motor.prototype.decreasePower = function () {
        this.power -= 10;
    };
    return Motor;
}());
