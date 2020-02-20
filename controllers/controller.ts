
var rocketList: any = [];
// var rocketRegEx = /^[0-9 A-Z]$/;
// var powerRegEx = /^([0-9])*$/;// let see number type


function createRocket() {
  var rockID: any = "";
  rockID = prompt("Please enter the rocket ID");
  if (rockID == "") {
    alert("Fields can't be empty");
  } else {
    var newRocket = new Rocket(rockID);
    var newMotor = addPropulsores(newRocket);
    rocketList.push(newRocket);
    console.log(newMotor);
    console.log(rocketList);
  }
}

function addPropulsores(newRocket: any) {
  var hMmotors: any; //hMmotors = How many motors?
  hMmotors = prompt("Please enter how many thrusters");
  if (hMmotors == "") {
    alert("Fields can't be empty");
  } else {
    let power: number = 0;
    let maxPower: any;
    for (let i = 1; i <= hMmotors; i++) {
      maxPower = prompt("Please enter max speed of thruster " + [i]);
      maxPower = parseInt(maxPower);
      var newPropulsor = new Motor(power, maxPower);
      //  console.log(newPropulsor);
      newRocket.addMotor(newPropulsor);
    }

  }

}

function incPower(x: number) {
  for (let i = 0; i < rocketList[x - 1].motors.length; i++) {
    
    rocketList[x - 1].motors[i].increasePower();
  }
  var speed = rocketList[x - 1].totalSpeed();
  console.log(rocketList);
  let showSpeed = document.getElementById("showSpeed" + x) as HTMLElement;
  showSpeed.innerHTML =  " Total speed: " + speed ;
}


function decPower(x: number) {
  for (let i = 0; i < rocketList[x - 1].motors.length; i++) {
    rocketList[x - 1].motors[i].decreasePower();
  }
  var speed = rocketList[x - 1].totalSpeed();
  console.log(rocketList);
  let showSpeed = document.getElementById("showSpeed" + (x)) as HTMLElement;
  showSpeed.innerHTML =  " Total speed: " + speed ;
}

function showRocket(x:number){
  var showMessage:any = document.getElementById("showMessage" + (x)) as HTMLElement;
  showMessage.style.display = "block";
  let showInfo = document.getElementById("showInfo" + x) as HTMLElement;
  showInfo.innerHTML = "Rocket # " + rocketList[x-1].rocketID + " has " + rocketList[x - 1].motors.length + " thrusters."
 
}







 







