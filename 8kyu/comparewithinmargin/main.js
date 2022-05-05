function closeCompare(a, b, margin){
    let difference = a - b
    return Math.abs(difference) <= margin || difference === 0 ? 0 : difference < 0 ? -1 : 1
   }