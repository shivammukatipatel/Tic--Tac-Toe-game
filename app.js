let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newgameBtn = document.querySelector("#new-gamebtn");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            // player O
            box.innerText = "O";
            turnO = false;
        }
        else {
            //player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwiner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = " ";
    }
};

const showwiner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkwiner = () => {
    for (let pattern of winPattern) {
        let possition1 = boxes[pattern[0]].innerText;
        let possition2 = boxes[pattern[1]].innerText;
        let possition3 = boxes[pattern[2]].innerText;

        if (possition1 != " " && possition2 != " " && possition3 != " ") {
            if (possition1 === possition2 && possition2 === possition3) {
                showwiner(possition1);

            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newgameBtn.addEventListener("click", resetGame)