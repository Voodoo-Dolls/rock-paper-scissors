let options = ["rock", "paper", "scissors"]



let getComputerChoice = () =>{
   return options[Math.floor(Math.random() * 3)]
}

// Determines Result
let playGame = (player, computer) =>{
    let win = false
    if (player === computer){
        console.log("It's a tie")
        return; 
    }else{
        switch(player){
            case "rock":
                if (computer === "scissors"){
                    win = true;
                }
                break;
            case "paper":
                if (computer === "rock"){
                    win = true;
                }
                break;
            case "scissors":
                if (computer === "paper"){
                    win = true;
                }
                break;
            default:
                console.log("Unknown Value")
                return
        }   
    }
    if (win){
        console.log(`You Win! ${player} beats ${computer}.`)
    }else{
        console.log(`You Lose! ${computer} beats ${player}.`)
    }
}

// Play Game

let play = (value) =>{
    playGame(value.toLowerCase(), getComputerChoice());
}