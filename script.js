function askNumber(){
    const input = prompt("Guess my number !")
    const result = Number(input)
    return result
    
}


// console.log("Tu as saisi : " + givenNumber);


function didIwin(num){
    if (num === 22) {
        alert("Bravo ! Vous avez deviné le nombre");
        return true
    } else if(num > 22) {
        alert("Plus petit");
        return false
    } else if(num < 22) {
        alert("Plus grand");
        return false
    }
    
}

function gamePlay(){
    let givenNumber = askNumber()
    while(didIwin(givenNumber)!=true){
       givenNumber = askNumber() 
    }
}
gamePlay()