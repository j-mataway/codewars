function feast(beast, dish) {
    return (beast.slice(0, 1) === dish.slice(0, 1) && beast.slice(-1) === dish.slice(-1))
    }