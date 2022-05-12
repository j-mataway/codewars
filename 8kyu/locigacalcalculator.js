function logicalCalc(array, op){
    if(op === 'AND'){
      return !array.some(ele => ele === false)
    }else if (op === 'OR'){
        return array.some(ele => ele === true)
      }
    else{
     return array.reduce((x,y) => x !== y)
    }   
}
