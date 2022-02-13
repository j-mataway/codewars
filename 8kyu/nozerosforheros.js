function noBoringZeros(n) {
    return n === 0 || !n.toString().endsWith(0) ? +n : noBoringZeros(n.toString().slice(0,-1))
}
    
    