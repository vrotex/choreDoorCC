const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let opendDoor3;
let currentlyPlaying = true;
const closedDoorPath =
    "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
const startButton = document.querySelector("#start");
const botDoorPath =
    "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath =
    "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath =
    "https://content.codecademy.com/projects/chore-door/images/space.svg";

doorImage1.addEventListener("click", () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
});
doorImage2.addEventListener("click", () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
});
doorImage3.addEventListener("click", () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = opendDoor3;
        playDoor(doorImage3);
    }
});

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor == 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        opendDoor3 = spaceDoorPath;
    } else if (choreDoor == 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        opendDoor3 = spaceDoorPath;
    } else if (choreDoor == 2) {
        opendDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        opendDoor1 = spaceDoorPath;
    }
};

const isBot = (door) => {
    return door.src == botDoorPath ? true : false;
};
const isClicked = (door) => {
    return door.src == closedDoorPath ? false : true;
};
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver("win");
    } else if (isBot(door)) {
        gameOver();
        startButton.innerHTML = "Game over! Play again?";
    }
};
const gameOver = (status) => {
    if (status == "win") {
        startButton.innerHTML = "You win! Play again?";
    }
    currentlyPlaying = false;
};

const startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = "Good Luck!";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};
startButton.addEventListener("click", () => {
    if (currentlyPlaying == false) {
        startRound();
    }
});
startRound();
