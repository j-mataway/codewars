function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    const myTime = pontoonDistance / youSpeed
    const sharkTime = sharkDistance / sharkSpeed
    
    const amIAlive = (myTime, sharkTime) => {
      console.log(myTime, sharkTime, dolphin)
      
        if (myTime < sharkTime){return 'Alive!'}
          else{return 'Shark Bait!'}}  
    
    if(dolphin){
      
      return amIAlive(myTime, sharkTime*2)
    } else{return amIAlive(myTime, sharkTime)}
      
    
    }