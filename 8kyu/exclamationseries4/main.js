function remove(string) {
    return string.replace(/!/g, '') + '!'
    
    }
//this takes in a string with random '!' throw in... removes them all and adds an '!' to the end
//should be completable with .replaceAll() but was not working