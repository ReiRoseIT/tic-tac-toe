const area = document.querySelector('.area');
let boxes = document.querySelectorAll('.box');

let scrin = document.querySelector('.scrin');
const restartButton = document.querySelector('.scrin__option');

let move = 0;
let winner = '';

function game(e) {
    if (e.target.classList.contains('checked') || winner != '') return;
    if (e.target.classList.contains('box')) {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        move++;
        e.target.classList.add('checked');
        checkWinner();
        checkDraw();
    }
};

function checkWinner() {
    let winPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winPositions.length; i++) {
        if (boxes[winPositions[i][0]].innerHTML == 'X'
            && boxes[winPositions[i][1]].innerHTML == 'X'
            && boxes[winPositions[i][2]].innerHTML == 'X') {
            winner = 'Крестики';
            winScrin(winner);
        }
        else if (boxes[winPositions[i][0]].innerHTML == 'O'
            && boxes[winPositions[i][1]].innerHTML == 'O'
            && boxes[winPositions[i][2]].innerHTML == 'O') {
            winner = 'Нолики';
            winScrin(winner);
        }
    }
}
function checkDraw() {
    if (move == 9 && winner == '') {
        winner = 'Ничья';
        winScrin(winner);
    }
}

function winScrin(winner) {
    scrin.style.display = 'flex';
    document.querySelector('.scrin__winner').textContent += winner;
}

function restart() {
    winner = '';
    move = 0;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = '';
        boxes[i].classList.remove('checked');
    };
    scrin.style.display = 'none';
    document.querySelector('.scrin__winner').textContent = 'Победитель: ';
};


area.addEventListener('click', game);
restartButton.addEventListener('click', restart);