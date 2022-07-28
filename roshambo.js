let wins =0;
let losses =0;

while(wins<3&&losses<3){

let input = prompt("Rock Paper Scissors!");

referee(input, opponentchoice());



console.log("Wins: " + wins + "     Losses: " + losses);

}

if(wins>2){
    console.log("Outstanding Victory!");
}

if(losses>2){
    console.log("This is why your parents got a divorce...");
}



function referee(playerchoice, compchoice){

    switch(playerchoice){
        case "rock":
            switch(compchoice){
                case "rock":
                    console.log("Tie");
                    break;
                case "paper":
                    console.log("Lose");
                    losses++;
                    break;
                case "scissors":
                    console.log("Win");
                    wins++;
                    break;
            }
            break;
        case "paper":
            switch(compchoice){
                case "rock":
                    console.log("Win");
                    wins++;
                    break;
                case "paper":
                    console.log("Tie");
                    break;
                case "scissors":
                    console.log("Lose");
                    losses++;
                    break;
            }
            break;
        case "scissors":
            switch(compchoice){
                case "rock":
                    console.log("Lose");
                    losses++;
                    break;
                case "paper":
                    console.log("Win");
                    wins++;
                    break;
                case "scissors":
                    console.log("Tie");
                    break;
            }
            break;
        default:
            console.log("Please enter rock, paper, or scissors");
    }

}

function opponentchoice(){
    let choice;
    let randomn=Math.random();

    if(randomn<=0.33){
        choice="rock";
    }else if(randomn>0.33&&randomn<=0.67){
        choice="paper";
    }else{
        choice="scissors";
    }
    console.log(randomn)
    return choice;
}