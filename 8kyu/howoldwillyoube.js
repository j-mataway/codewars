function  calculateAge(birthYear, whatYear) {
    if(birthYear === whatYear){return 'You were born this very year!'}
    else if (birthYear < whatYear){ 
        let age = whatYear - birthYear
        return age === 1 ? `You are 1 year old.` : `You are ${age} years old.`
    }else{
      let howLongUntilBorn = birthYear - whatYear
      return howLongUntilBorn === 1 ? `You will be born in 1 year.` : `You will be born in ${howLongUntilBorn} years.`
  }
  }