let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (UserWin, userChoice, compChoice) => {

    if (UserWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; 
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lost!  ${compChoice} beats Your ${userChoice}`; 
       msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // Generate computer choice
     const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    } else {
        let UserWin = true;
        if (userChoice === "rock") {
            // comp choice scissor, paper
            UserWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // comp choice scissor, rock
            UserWin = compChoice === "scissor" ? false : true;
        } else {
            // rock, scissor
            UserWin = compChoice === "rock" ? false : true;
        }
        showWinner(UserWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


