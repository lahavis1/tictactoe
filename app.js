let cells = document.querySelectorAll('.row > div');
//querySelectorAll allows javascript to take part of html
//addEventListener allows to click each box abd id individually.
for (let i = 0; i < cells.length; i++) {
   cells[i].addEventListener('click', cellClicked);
}  

// assign players to text with 'X" always going first.
const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1

const winArrays = [ 
    [0, 1, 2], //horizontal win options
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // vertical win options
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal win options
    [6, 4, 2],
]
const alertX = 'player1 is the winner';
const alertO = 'player2 is the winner';
startGame();

function startGame() {
	origBoard = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener('click', cellClicked, false);
	}
}
        
//setting up the turns changing 
function cellClicked() {
    event.target.textContent= currentPlayer;
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}

 function checkWinner(move) {
    // Add 1 to turnCount each time checkWinner() is called
    turnCount += 1; 

    // Initialize result to false
    let result = false;
 } 

    function checkWinConditions() {
        // check if x wins horizontally
        if (cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent ==='X'); 
        else if (cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent ==='X'); 
        else if (cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent ==='X'); 
        // check if X wins vertically
        else if (cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent ==='X'); 
        else if (cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent ==='X'); 
        else if (cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent ==='X'); 
        // check if X wins diagonally
        else if (cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent ==='X'); 
        else if (cells[6].textContent === 'X' && cells[4].textContent === 'X' && cells[2].textContent ==='X'); 
        // check if O wins horizontally
        else if (cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent ==='O'); 
        else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent ==='O'); 
        else if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent ==='O'); 
        // check if O wins vertically
        else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent ==='O'); 
        else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent ==='O'); 
        else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent ==='O'); 
        // check if O wins diagonally
        else if (cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent ==='O'); 
        else if (cells[6].textContent === 'O' && cells[4].textContent === 'O' && cells[2].textContent ==='O'); 
        //this condition checks for tie. if none of the above conditions register and 9 squares are selected, the code executes
        else if (selectedcells.length >= 9) {
            alert("winner is ${currentplayer}") || alert("it's a tie!")
        }

    }

    function winArrays(cellA, cellB, cellC) {
       //the next 3 variables will be used to check for 3 in a row
       const a = selectedcells.includes(cellA);
       const b = selectedcells.includes(cellB);
       const c = selectedcells.includes(cellC);
       //if the 3 variables we pass are all included in our array true is returned and our else if condition executes the drawWinLine function
       if (a === true && b === true && c === true) { return true; }
   }