function consecutive(arr, a, b) {
 const indexa = arr.indexOf(a)
 const indexb = arr.indexOf(b)
 return Math.abs(indexa-indexb === 1)
  }

