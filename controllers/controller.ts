
var rocketList:any = [];
var rocketRegEx = /^[0-9 A-Z]$/;
var powerRegEx = /^([0-9])*$/;// let see number type
var hMany = 0;

// var hMany: any = (<HTMLInputElement>document.querySelector('#hMany')).value;   hMany = parseInt(hMany.value);
function getManyRockets(){

   var hMany = parseInt((<HTMLInputElement>document.querySelector('#hMany')).value);

   var formInput = document.getElementById("hManyInput") as HTMLElement;
      formInput.style.display = "none";

      var addWheels = document.getElementById("create_rockets") as HTMLElement;
      addWheels.style.display = "block";

      var carCreatedTitle = document.getElementById("carCreatedTitle") as HTMLElement;
      carCreatedTitle.style.display = "none";
}



function createRocket() {
   
  for (let i=0; i<= hMany; ++i ){
   let rockID:any = "";
   rockID = document.getElementById("inputRocket") as HTMLInputElement;
   
   if (rockID.value == "" ) {
            alert("Fields can be empty.");
            return false;
         // }else if (rocketRegEx.test(rockID.value)==false){
         //    alert("Wrong Id Format");
         //    return false;

         }

         rocketList.push(rockID.value);
         console.log(rocketList);
         
 }

 
  
//    //  get rocket data
  

//    //empty field validator

//    if (rockID.value == "" ) {
//       alert("Los campos no pueden quedar vacios");
//       return false;
//    }

//    if (rocketRegEx.test(rockID.value)) { // plate format validator

//       // form selector

//       var formInput = document.getElementById("formInput") as HTMLElement;
//       formInput.style.display = "none";

//       var addWheels = document.getElementById("addWheels") as HTMLElement;
//       addWheels.style.display = "block";

//       var carCreatedTitle = document.getElementById("carCreatedTitle") as HTMLElement;
//       carCreatedTitle.style.display = "block";

//       //Car creator

//       rocket = new Rocket(rockID.value);
//       console.log(rocket);

//       var rIDRes = document.getElementById("rocketID1") as HTMLElement;
//       rIDRes.innerHTML = "Rocket ID # 1: " + "<b>" + rocket.rocketID.toUpperCase() + "</b>";

      

//    } else {
//       alert("Wrong Id Format");
//       return false;
//    }

// }



// function addWheels() {
//  var wheel: Wheel[] = []; //initialize var type class nad empty
//       // getting wheels
//    for (var i = 1; i <= 4; i++) {
//       var brandW: any = (<HTMLInputElement>document.querySelector('#brandInput' + i)).value;
//       var diamW: any = (<HTMLInputElement>document.querySelector('#diamInput' + i)).value;


//       //Wheels diameter and brand validator
//       if ((diamW < 0.4) && (brandW != "") || (diamW > 2) && (diamW != "")) {
//          alert("El diámetro de la rueda" + i + "es incorrecto");
//          return false;
//       }

//       // empty fields validator
//       else if ((brandW == "") || (diamW == "")) {
//          alert("Los campos no pueden quedar vacios");
//          return false;
//       }else{
//         wheel[i-1] = new Wheel(diamW,brandW); // create wheels in the array
//       }
    
//    } console.log(wheel);

//     // form selector
//     let formInput = document.getElementById("formInput") as HTMLElement;
//    formInput.style.display = "none";

//    let addWheels = document.getElementById("addWheels") as HTMLElement;
//    addWheels.style.display = "none";

//    var carCreatedTitle = document.getElementById("carCreatedTitle") as HTMLElement;
//    carCreatedTitle.style.display = "none";

//    let showCarCreated = document.getElementById("showCarCreated") as HTMLElement;
//    showCarCreated.style.display = "block";

//    //print Car data
//    var pRes = document.getElementById("plateCreated") as HTMLElement;
//    pRes.innerHTML = "Plate: " + "<b>" + car.plate.toUpperCase() + "</b>";
   

//    var bRes = document.getElementById("brandCreated") as HTMLElement;
//    bRes.innerHTML = "Brand: " + "<b>" + car.brand + "</b>";

//    var cRes = document.getElementById("colorCreated") as HTMLElement;
//    cRes.innerHTML = "Color: " + "<b>" + car.color + "</b>";
 
//    // print wheels

//  for (var i = 1; i <= 4; i++) {// cicling array with wheel[i-1].brand
    
     
    
//      var bwRes = document.getElementById("brandOutput"+ (i)) as HTMLElement;
//       bwRes.innerHTML = "Brand Wheel " + (i) + ": " + "<b>" + wheel[i-1].brand + "</b>";
   
//      var dwRes = document.getElementById("diamOutput"+ (i)) as HTMLElement;
//       dwRes.innerHTML = "Diameter Wheel " + (i) + ": " + "<b>" + wheel[i-1].diameter + "</b>";
//  }
 
// 
}