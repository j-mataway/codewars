function isDigit(s) {
    return isNaN(+s) || s===' ' || s==='' ? false : typeof +s === 'number'
    }