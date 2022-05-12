function validateHello(greetings) {
  const translations =['hello','ciao','salut','hallo','hola','ahoj','czesc']
  return translations.some(el => greetings.toLowerCase().includes(el))
  }