function splitAndMerge(string, separator) {
    string = string.split(' ')
    for (let i = 0; i<string.length; i++){
    string[i] = string[i].split('').join(separator)  
    }  
    return string.join(' ')
    }