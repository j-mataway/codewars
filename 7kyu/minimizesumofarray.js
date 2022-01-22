function minSum(arr) {
    let newArr = []
    arr.sort((a,b) => a-b)
  
    for (let i = 1; i<=arr.length/2; i++){
  
       let product = arr[i-1] * arr[arr.length-i] 
       newArr.push(product)
    }
   return newArr.reduce((x,y)=> x+y) 
  }