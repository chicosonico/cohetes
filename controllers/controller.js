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
    var hMmotors = 0; //hMmotors = How many motors?
    hMmotors = prompt("Please enter how many thrusters");
    if (hMmotors == "") {
        alert("Fields can't be empty");
    }
    else {
        var power = 0;
        for (var i = 1; i <= hMmotors; i++) {
            var newPropulsor = new Motor(power);
            //  console.log(newPropulsor);
            newRocket.addMotor(newPropulsor);
        }
    }
}
function incPower(x) {
    for (var i = 0; i < rocketList[x - 1].motors.length; i++) {
        rocketList[x - 1].motors[i].increasePower();
    }
    console.log(rocketList);
}
function decPower(x) {
    for (var i = 0; i < rocketList[x - 1].motors.length; i++) {
        rocketList[x - 1].motors[i].decreasePower();
    }
    console.log(rocketList);
}
function showRocket(x) {
    var showInfo = document.getElementById("showInfo");
    showInfo.innerHTML = "Rocket # " + rocketList[x - 1].rocketID + " has " + rocketList[x - 1].motors.length + " thrusters." +
        "</b>" + " Speed: " + rocketList[x - 1].motors[0].power;
}
