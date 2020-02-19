"use strict";
var Motor = /** @class */ (function () {
    function Motor(power, maxPower) {
        this.power = power;
        this.maxPower = maxPower;
    }
    Motor.prototype.increasePower = function () {
        this.power += 10;
    };
    Motor.prototype.decreasePower = function () {
        this.power -= 10;
    };
    return Motor;
}());
