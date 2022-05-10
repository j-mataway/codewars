function mango(quantity, price){

    return quantity % 3 === 0 ? (quantity/3)*2*price:quantity%3===1?((quantity-1)/3)*2*price+price:((quantity-2)/3)*2*price+(2*price)
      
    }