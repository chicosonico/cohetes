class Motor {
    public power: number;
    public maxPower: number;


    constructor(power: number, maxPower: number) {
        this.power = power;
        this.maxPower = maxPower;
    }

    increasePower() {
        this.power += 10
    }

    decreasePower() {
        this.power -= 10
    }


}