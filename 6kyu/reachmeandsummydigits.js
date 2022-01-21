function sumDigNthTerm(initval, patternl, nthterm) {

    let acc = initval
    //duplicates the pattern to the length of nthterm  
    while(patternl.length < nthterm){
          patternl = patternl.concat(patternl)
    }
    //iterate over the pattern, starting with initval, adding the next number in the pattern each iteration  
      for(let i = 0; i<nthterm-1; i++){
      acc += patternl[i]
    }
    //splits final number into an array, reduces it to find the sum of the digits
    return acc.toString().split('').reduce((a,c)=>a+ +c, 0)
    }