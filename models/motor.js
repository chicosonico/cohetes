"use strict";
var Motor = /** @class */ (function () {
    function Motor(power, maxPower) {
        this.power = power;
        this.maxPower = maxPower;
    }
    Object.defineProperty(Motor.prototype, "getPower", {
        get: function () {
            return this.power;
        },
        enumerable: true,
        configurable: true
    });
    Motor.prototype.increasePower = function () {
        if (this.power < this.maxPower) {
            this.power += 10;
        }
    };
    Motor.prototype.decreasePower = function () {
        if (this.power > 0) {
            this.power -= 10;
        }
    };
    return Motor;
}());
