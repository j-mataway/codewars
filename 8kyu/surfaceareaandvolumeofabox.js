function getSize(w, h, d){
    const sa = 2*w*h + 2*h*d + 2*w*d
    const vol = w*h*d
    return [sa, vol]
  }
  