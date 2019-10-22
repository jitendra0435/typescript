let car = {
    hornMessage: "Beep! Beep!",
    soundHorn : function(){
                  return this.hornMessage;
                }
  };
  let truckHorn = {
    hornMessage: "HOOONNNNKKKKK!"
  };
  
  console.log(car.soundHorn()); // "Beep! Beep!"
  console.log(car.soundHorn.call(truckHorn)); // "HOOONNNNKKKKK!"
  let truckHonk = car.soundHorn.bind(truckHorn);
  console.log(truckHonk());