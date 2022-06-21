var findMissing = function (list) {  
    const difference = []
    for(let i = 1; i < list.length; i++){
      difference.push(Math.abs(list[i]-list[i-1]))
    }
    const positionOfDiscrepency = difference.indexOf(Math.max(...difference)) + 1
    const numberToAdd = difference[positionOfDiscrepency-1]/2
    return list[positionOfDiscrepency] >=0 ? list[positionOfDiscrepency] - numberToAdd : list[positionOfDiscrepency] + numberToAdd
  
  }
  