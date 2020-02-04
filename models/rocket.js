"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocketID) {
        this.motors = new Array();
        this.rocketID = rocketID;
    }
    Rocket.prototype.addMotor = function (motor) {
        this.motors.push(motor);
    };
    return Rocket;
}());
// class Car{
//     plate:string;
//     brand:string;
//     color:string;
//     wheels:Wheel[]=new Array();
//     constructor(plate:string, brand:string, color:string){
//         this.plate=plate;
//         this.brand=brand;
//         this.color=color;
//     }
//     addWheel(wheel:Wheel):void{
//         this.wheels.push(wheel);
//     }
// }
