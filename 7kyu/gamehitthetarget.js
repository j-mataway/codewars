const solution = mtrx => {
  for(let i = 0; i < mtrx.length; i++){
    if (mtrx[i].includes('>')){
     return mtrx[i].includes('x') && mtrx[i].indexOf('>')<mtrx[i].indexOf('x')
      break
    }
  }
  }