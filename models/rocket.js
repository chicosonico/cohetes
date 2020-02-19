"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocketID) {
        this.motors = new Array();
        this.rocketID = rocketID;
        this.motors = [];
    }
    Rocket.prototype.addMotor = function (motor) {
        this.motors.push(motor);
    };
    Rocket.prototype.totalSpeed = function () {
        var result = 0;
        for (var i = 0; i < this.motors.length; i++) {
            result = result + this.motors[i].getPower;
        }
        return result;
    };
    return Rocket;
}());
