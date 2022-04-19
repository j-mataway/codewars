function squareSum(numbers){
    return numbers.map(x => x**2).reduce((x, y) => x + y, 0)
    }