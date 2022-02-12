function validatePIN (pin) {
    pin = pin.replace(/\D/g, 'z')
    return !pin.includes('z') && (pin.length === 4 || pin.length === 6)
    }