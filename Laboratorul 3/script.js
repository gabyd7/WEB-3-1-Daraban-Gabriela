

function calculateSum(a, b) {
    return a + b;
}

console.log(calculateSum(5, 3));
console.log(calculateSum(10, 7));


const student = {
    name: "Gabriela",
    age: 17,
    grade: 10,

    introduce: function() {
        console.log("Sunt " + this.name + " și am " + this.age + " ani.");
    }
};

student.introduce();

student.grade = 9;

console.log("Noua notă:", student.grade);




const choices = ["piatra", "hartia", "foarfeca"];

const gameScore = {
    player: 0,
    computer: 0,
    draws: 0,

    displayScore: function() {
        playerScoreElement.textContent = this.player;
        computerScoreElement.textContent = this.computer;
        drawsElement.textContent = this.draws;
    }
};

let rounds = 0;


const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");
const resultElement = document.getElementById("result");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const drawsElement = document.getElementById("draws");
const roundsElement = document.getElementById("rounds");
const leaderElement = document.getElementById("leader");

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function getChoiceName(choice) {

    if (choice === "piatra") {
        return "Piatra";
    }

    if (choice === "hartia") {
        return "Hârtia";
    }

    return "Foarfeca";
}


function playGame(playerChoice) {

    const computerChoice = getComputerChoice();

    playerChoiceElement.textContent = getChoiceName(playerChoice);

    computerChoiceElement.textContent = getChoiceName(computerChoice);

    rounds++;


    if (playerChoice === computerChoice) {

        resultElement.textContent = "Egalitate!";

        gameScore.draws++;
    }


    else if (
        (playerChoice === "piatra" && computerChoice === "foarfeca") ||
        (playerChoice === "foarfeca" && computerChoice === "hartia") ||
        (playerChoice === "hartia" && computerChoice === "piatra")
    ) {

        resultElement.textContent = "Ai câștigat!";

        gameScore.player++;
    }


    else {

        resultElement.textContent = "Calculatorul a câștigat!";

        gameScore.computer++;
    }



    gameScore.displayScore();

    roundsElement.textContent = rounds;

    showLeader();

    checkWinner();
}



function showLeader() {

    if (gameScore.player > gameScore.computer) {

        leaderElement.textContent = "Tu conduci scorul!";

    } else if (gameScore.computer > gameScore.player) {

        leaderElement.textContent = "Calculatorul conduce scorul!";

    } else {

        leaderElement.textContent = "Scorul este egal!";
    }
}



function checkWinner() {

    if (gameScore.player === 5) {

        resultElement.textContent =
            "Ai ajuns la 5 victorii! Ai câștigat jocul!";
    }

    if (gameScore.computer === 5) {

        resultElement.textContent =
            "Calculatorul a ajuns la 5 victorii!";
    }
}



function newGame() {

    gameScore.player = 0;

    gameScore.computer = 0;

    gameScore.draws = 0;

    rounds = 0;

    playerChoiceElement.textContent = "-";

    computerChoiceElement.textContent = "-";

    resultElement.textContent =
        "Alege o variantă pentru a începe!";

    leaderElement.textContent = "";

    gameScore.displayScore();

    roundsElement.textContent = rounds;
}



document.getElementById("rock").addEventListener("click", function() {

    playGame("piatra");

});


document.getElementById("paper").addEventListener("click", function() {

    playGame("hartia");

});


document.getElementById("scissors").addEventListener("click", function() {

    playGame("foarfeca");

});



document.getElementById("newGame").addEventListener("click", newGame);