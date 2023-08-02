const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const userScore = document.getElementById("playerScore");
const npcScore = document.getElementById("npcScore");

const gameInfo = document.getElementById("gameInfo");

const info = document.getElementById("info")

let userScoreSum = 0;
let npcScoreSum = 0;

function clickEvent(e) {
    let itemUser;
    let itemNpc;
    let randomArray = [rock, paper, scissors];

    itemUser = e.target;
    itemNpc = randomArray[Math.floor(Math.random() * randomArray.length)];
    if (itemUser === itemNpc) {
        info.textContent = "Both chose the same thing."
        console.log(itemUser,itemNpc);
    }
     else if (itemUser === randomArray[0] && itemNpc === randomArray[1]) {
        npcScoreSum += 1;
        info.textContent = ""
    } else if (itemUser === randomArray[1] && itemNpc === randomArray[2]) {
        npcScoreSum += 1;
        info.textContent = ""
    } else if (itemUser === randomArray[2] && itemNpc === randomArray[0]) {
        npcScoreSum += 1;
        info.textContent = ""
    } else {
        userScoreSum += 1;
        info.textContent = ""
    }

    userScore.textContent = userScoreSum;
    npcScore.textContent = npcScoreSum;

    if (userScoreSum > npcScoreSum) {
        userScore.style.color = "green";
        npcScore.style.color = "red";
    } else if (userScoreSum < npcScoreSum) {
        userScore.style.color = "red";
        npcScore.style.color = "green";
    } else {
        userScore.style.color = "yellow";
        npcScore.style.color = "yellow";
    }
    if (userScoreSum == 10) {
        userScoreSum = 0;
        npcScoreSum = 0;
        gameInfo.textContent = "Game over You Win !";
        gameInfo.style.color = "green";
    } else if (npcScoreSum == 10) {
        userScoreSum = 0;
        npcScoreSum = 0;
        gameInfo.textContent = "Game over NPC Win !";
        gameInfo.style.color = "red";
    }
    
    
}
rock.addEventListener("click", clickEvent);
paper.addEventListener("click", clickEvent);
scissors.addEventListener("click", clickEvent);
