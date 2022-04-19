function squareOrSquareRoot(array) {
    let newArr = array.map(x => {
      if (Number.isInteger(Math.sqrt(x)) == true){return Math.sqrt(x)}
      else {return x ** 2}
    }) 
   return newArr
  }
//checks each element of the array, if element has an integer sq root it returns, if not it squares instead