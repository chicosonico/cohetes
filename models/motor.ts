class Motor {
    public power: number;
    public maxPower: number;


    constructor(power: number, maxPower: number) {
        this.power = power;
        this.maxPower = maxPower;
    }

    get getPower() {
        return this.power;
    }


    increasePower() {
        if(this.power < this.maxPower){
            this.power += 10;
        } 
    }

    decreasePower() {
        if(this.power > 0){
            this.power -= 10;
        }
        
    }

    


}