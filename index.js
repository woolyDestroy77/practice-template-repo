//Initialize Game

function initializeGame() {
    return new Promise((resolve) => {
        console.log("Initializing Game...");
        setTimeout(() => {
            console.log("Initialized Game Successfully!");
            resolve();
        }, 2000);
    });
}

//Move Player
function movePlayer() {
    return new Promise((resolve) => {
        console.log(`Player is Moving ${direction}...`);
        setTimeout(() => {
            console.log(`Player Moved ${direction}`);
            resolve();
        }, 1000);
    });
};

//Score Calculation
function calculateScore() {
    return new Promise((resolve) => {
        console.log("Calculating Score...");
        setTimeout(() => {
            const score = Math.floor(Math.random() * 100);
            console.log(`Score = ${score}`);
            resolve(score);
        }, 1500);
    });
}

//GameOver Checking
function checkGameOver(score) {
    return new Promise((resolve) => {
        console.log("Checking Game Status...;")
            setTimeout(() => {
                if(score > 50) {
                    console.log("Continue Playing...");
                    resolve(false);
                }
                else{
                    console.log("Game Over!");
                    resolve(true);
                }
            }, 1000);
    });
}

//Start Game

async function startGame() {
    await initializeGame();

    await movePlayer("right");
    await movePlayer("up");

    const score= await calculateScore();
    
    const isGameOver = await checkGameOver(score);
    
    if (!isGameOver) {
        console.log("The game continues...");
    }
}

startGame();