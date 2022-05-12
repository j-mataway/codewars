function solution(a, b){
    let alength = a.length
    let blength = b.length
    if (alength > blength){return (`${b}${a}${b}`)}
    else {return (`${a}${b}${a}`)}
  }

//ternary

//let solution = (a,b) => a.length < b.length ? a + b + a : b + a + b  