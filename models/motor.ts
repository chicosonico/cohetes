class Motor{
    public power:number;
    

    constructor(power:number){
        this.power=power;   
    }

     increasePower(){
     this.power += 10 
    }
    decreasePower(){
        this.power -= 10 
       }
    

}