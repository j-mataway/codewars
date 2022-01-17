function elevator(left, right, call){
    const l = Math.abs(left - call)
    const r = Math.abs(right - call)
    return l<r? 'left' : 'right'
   }