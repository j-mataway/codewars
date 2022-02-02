function drawStairs(n) {
    let stairs = ''
    for(let i = 0; i<n; i++){
    if (i === 0) {stairs = 'I'}
    else {stairs +='\n' + ' '.repeat(i) + 'I'}
    }
     return stairs
    }