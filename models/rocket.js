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
    return Rocket;
}());
