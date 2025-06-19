function askNumber(){
    const input = prompt("Guess my number !")
    const result = Number(input)
    return result
    
}


// console.log("Tu as saisi : " + givenNumber);


function didIwin(num, num2){
    if (num === num2) {
        alert("Bravo ! Vous avez deviné le nombre");
        return true
    } else if(num > num2) {
        alert("Plus petit");
        return false
    } else if(num < num2) {
        alert("Plus grand");s
        return false  }
}
function gamePlay(){
    let guessNumber = RandomNumber()
    let givenNumber = askNumber()
    while(didIwin(givenNumber, guessNumber)!=true){
       givenNumber = askNumber() 
    }
}
gamePlay()

function RandomNumber(){
    let input = prompt("Choisi un nombre entre 0 et 50!")
    input = Number(input)
    return input
}