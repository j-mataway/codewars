function interest(P,r,n) {
    const simple = Math.round(P + P*r*n)
    let compound = P
    for (let i = 1; i<=n; i++){
      compound += compound*r
    }
    return [simple, Math.round(compound)]  
    }
    
    