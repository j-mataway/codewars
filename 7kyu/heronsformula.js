function heron(a, b, c) {
    let s = (a+b+c)/2
    const solution = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return +solution.toFixed(2);
  }