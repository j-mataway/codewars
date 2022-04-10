function betterThanAverage(classPoints, yourPoints) {
    let classTotal = classPoints.reduce((x , i) => x + i)
    classTotal += yourPoints
    let average = classTotal/(classPoints.length + 1)
    
    if (yourPoints > average){return true}
    else{return false}
  }
  