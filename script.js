let pattern = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
    [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

let boxes = document.querySelectorAll(".box");
let h1 = document.querySelector(".winner");
let reset = document.querySelector(".reset");
let player = true;
let gameover = false;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.textContent !== "" || gameover) return;

        if (player === true) {
            box.textContent = "O"
        } else {
            box.textContent = "X"
        }
        player = !player;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let patternTOWin of pattern) {
        let position1 = boxes[patternTOWin[0]];
        let position2 = boxes[patternTOWin[1]];
        let position3 = boxes[patternTOWin[2]];

        if (
            position1.textContent !== "" &&
            position1.textContent === position2.textContent &&
            position2.textContent === position3.textContent
        ) {
            h1.textContent = "Winner Is: " + position1.textContent;
            disableBoard();
            gameover = true;
            return;
        }
    }
};

const disableBoard = () => {
    boxes.forEach(box => {
        box.removeEventListener("click", () => {})
    })
}

reset.addEventListener("click",() => {
boxes.forEach(box => {
    box.textContent = "";
    h1.textContent = "";
    player = true;
    gameover = false;
})
})
