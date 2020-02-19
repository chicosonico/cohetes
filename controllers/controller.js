"use strict";
var rocketList = [];
// var rocketRegEx = /^[0-9 A-Z]$/;
// var powerRegEx = /^([0-9])*$/;// let see number type
function createRocket() {
    var rockID = "";
    rockID = prompt("Please enter the rocket ID");
    if (rockID == "") {
        alert("Fields can't be empty");
    }
    else {
        var newRocket = new Rocket(rockID);
        var newMotor = addPropulsores(newRocket);
        rocketList.push(newRocket);
        console.log(newMotor);
        console.log(rocketList);
    }
}
function addPropulsores(newRocket) {
    var hMmotors; //hMmotors = How many motors?
    hMmotors = prompt("Please enter how many thrusters");
    if (hMmotors == "") {
        alert("Fields can't be empty");
    }
    else {
        var power = 0;
        var maxPower = void 0;
        for (var i = 1; i <= hMmotors; i++) {
            maxPower = prompt("Please enter max speed of thruster " + [i]);
            maxPower = parseInt(maxPower);
            var newPropulsor = new Motor(power, maxPower);
            //  console.log(newPropulsor);
            newRocket.addMotor(newPropulsor);
        }
    }
}
function incPower(x) {
    for (var i = 0; i < rocketList[x - 1].motors.length; i++) {
        rocketList[x - 1].motors[i].increasePower();
    }
    var speed = rocketList[x - 1].totalSpeed();
    console.log(rocketList);
    var showSpeed = document.getElementById("showSpeed");
    showSpeed.innerHTML = " Total speed: " + speed;
}
function decPower(x) {
    for (var i = 0; i < rocketList[x - 1].motors.length; i++) {
        rocketList[x - 1].motors[i].decreasePower();
    }
    var speed = rocketList[x - 1].totalSpeed();
    console.log(rocketList);
    var showSpeed = document.getElementById("showSpeed");
    showSpeed.innerHTML = " Total speed: " + speed;
}
function showRocket(x) {
    var showMessage = document.getElementById("showMessage");
    showMessage.style.display = "block";
    var showInfo = document.getElementById("showInfo");
    showInfo.innerHTML = "Rocket # " + rocketList[x - 1].rocketID + " has " + rocketList[x - 1].motors.length + " thrusters.";
}
