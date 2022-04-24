function countPositivesSumNegatives(input) {
    let numOfPos = 0
    let sumOfNeg = 0
    console.log(input)
 
 
    if (!input || input.length == 0 ){ return []}
 
 
    input.forEach(x =>{
      if (x > 0){numOfPos++}
      else if (x < 0){sumOfNeg += x}
    })
    
      return [numOfPos, sumOfNeg]
}