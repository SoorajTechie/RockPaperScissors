let userScore=0;
let computerScore=0;
let compChoice ;

let choice = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");
let User = document.querySelector("#user-score");
let compu = document.querySelector("#computer-score");

let cm_played = document.querySelector("#cm-played");


const computerPlayed = (compChoice) => {
    if(compChoice==="rock")
    {
        cm_played.innerText = "The Computer played Rock..!!";

    }else if(compChoice === "paper")
    {
        cm_played.innerText = "The Computer played Paper..!!";

    }else{
        cm_played.innerText = "The Computer played Scissors..!!";

    }
}

const gameDraw = () => {

    msg.innerText = "Game was draw, Play again";
    computerPlayed(compChoice);


} 

const showWinner = (userWin) => {
    if(userWin)
    {
        msg.innerText = "You wins";
        userScore++;
        User.innerText = userScore;
        computerPlayed(compChoice);

    }else{
        msg.innerText = "Computer wins";
        computerScore++;
        compu.innerText = computerScore;
        computerPlayed(compChoice);

    }


}
const genCompute = () => {
    const options = ["rock","paper","scissors"];

    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const append_computer_choice = (compChoice) => {

}
const playGame = (userChoice) => { 
        
     console.log("User choice",userChoice);
    //gen computer choice
      compChoice = genCompute();
     console.log("computer choice ",compChoice); 

    if(userChoice===compChoice)
    {
        //draw
        gameDraw();
        
    }else{
        let userWin = true;
        if(userChoice === "rock")
        {            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock,scissors
            userWin = compChoice === "scissors"?false:true;
        }
        else
        {   //rock,paper
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin);
        append_computer_choice(compChoice);
    }
    
}

choice.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    });
});



