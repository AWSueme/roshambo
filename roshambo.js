let wins =0;
let losses =0;
let winscore=document.querySelector("#wins");
let losescore=document.querySelector("#losses");
let outcome=document.querySelector("#outcome");
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");



//let input = prompt("Rock Paper Scissors!");

//referee(input, opponentchoice());

rock.addEventListener('click', throwrock);
scissors.addEventListener('click', throwscissors);
paper.addEventListener("click", throwpaper);


function throwrock(){
    referee("rock");
}

function throwscissors(){
    referee("scissors");
}

function throwpaper(){
    referee("paper");
}



function referee(playerchoice){

    let compchoice=opponentchoice();

    switch(playerchoice){
        case "rock":
            switch(compchoice){
                case "rock":
                    outcome.textContent="Tie";
                    break;
                case "paper":
                    outcome.textContent="Lose";
                    losses++;
                    break;
                case "scissors":
                    outcome.textContent="Win";
                    wins++;
                    break;
            }
            break;
        case "paper":
            switch(compchoice){
                case "rock":
                    outcome.textContent="Win";
                    wins++;
                    break;
                case "paper":
                    outcome.textContent="Tie";
                    break;
                case "scissors":
                    outcome.textContent="Lose";
                    losses++;
                    break;
            }
            break;
        case "scissors":
            switch(compchoice){
                case "rock":
                    outcome.textContent="Lose";
                    losses++;
                    break;
                case "paper":
                    outcome.textContent="Win";
                    wins++;
                    break;
                case "scissors":
                    outcome.textContent="Tie";
                    break;
            }
            break;
        default:
            console.log("Please enter rock, paper, or scissors");
            
    }

    
    winscore.textContent="wins: " + wins;
    losescore.textContent="losses: " + losses;



    if(wins>2){
        outcome.textContent="Outstanding Victory!";
    }

    if(losses>2){
        outcome.textContent="This is why your parents got a divorce...";
    }

    console.log("yo");
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