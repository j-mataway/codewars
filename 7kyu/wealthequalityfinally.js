function redistributeWealth(wealth) {
    let average = wealth.reduce((x,y) => x+y, 0)/wealth.length
    for(let i = 0; i < wealth.length; i++){
      wealth[i] = average
    }
  }