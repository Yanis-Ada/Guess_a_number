function askNumber(){
    const input = prompt("Guess my number !")
    const givenNumber = Number(input)
    return givenNumber
    
}

let result = askNumber()
console.log("Tu as saisi : " + result);