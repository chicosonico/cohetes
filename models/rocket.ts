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

}


