class Rocket {
    rocketID: string;
    motors: Motor[] = new Array();

    constructor(rocketID: string) {
        this.rocketID = rocketID;
        this.motors = [];
    }

    addMotor(motor: Motor): void {
        this.motors.push(motor);
    }

     totalSpeed(){
        var result: number = 0; 
    for(let i=0; i < this.motors.length; i++){
       result = result + this.motors[i].getPower;
    } return result;
  } 
      
        


    }




