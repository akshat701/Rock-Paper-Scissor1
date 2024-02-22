console.log("Akshat");
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msgs=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","scissors","paper"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =() =>{
    console.log("game was draw");
    msgs.innerText="Game was Draw";
    msgs.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msgs.innerText=`You WIN! your ${userChoice} beats ${compChoice}`;
        msgs.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you loos");
        msgs.innerText=`You WIN! your ${compChoice} beats ${userChoice}`;
        msgs.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice,compChoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});