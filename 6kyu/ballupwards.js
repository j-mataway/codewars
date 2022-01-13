function maxBall(v0) {
    let v = v0 * 0.277778
    let height = []
    for(let i = 0; i<=20; i+=.1){
    height.push(v*i - 4.905*i*i)
    }
    return height.indexOf(Math.max(...height))  
    }