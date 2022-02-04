function calculateTip(amount, rating) {
    const tips = {
      terrible:0,
      poor: .05,
      good: .1,
      great: .15,
      excellent: .2  
    }  
    return tips[rating.toLowerCase()] === 0 ? 0 : tips[rating.toLowerCase()] ? Math.ceil(tips[rating.toLowerCase()] * amount) : 'Rating not recognised'
  }