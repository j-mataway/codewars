function integrate(coefficient, exponent) {
    const exp = exponent + 1
    const coef = coefficient/exp
    return `${coef}x^${exp}`  
    }