function squareArea(A){
    let a = A / (2 * Math.PI * (90 / 360));
    let area = Math.pow(a, 2);
    return Number(area.toFixed(2));
  }