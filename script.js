function askNumber(){
    const input = prompt("Guess my number !")
    const result = Number(input)
    return result
    
}


// console.log("Tu as saisi : " + givenNumber);


function didIwin(num){
    if (num === 22) {
        alert("Bravo ! Vous avez deviné le nombre");
    } else if(num > 22) {
        alert("Plus petit");
    } else if(num < 22) {
        alert("Plus grand");

    }
    
}

function gamePlay(){
    let givenNumber = askNumber()
    didIwin(givenNumber)
}
gamePlay()