function getDrinkByProfession(param){
    const drinks = {
    jabroni:	"Patron Tequila",
    schoolcounselor:	"Anything with Alcohol",
    programmer:	"Hipster Craft Beer",
    bikegangmember:	"Moonshine",
    politician: "Your tax dollars",
    rapper:"Cristal",
    }
    const who = param.toLowerCase().split(' ').join('')
    return drinks[who] ? drinks[who] : "Beer"
    }