function createGameBoard(rows, columns, content) {
    let board = [];

    for (let row = 0; row < rows; row++) {
        let rowArray = [];

        for (let col = 0; col < columns; col++) {
            let cell = content.find(item => item.row === row && item.col === col);

            if (cell) {
                rowArray.push(cell.value);
            } else {
                rowArray.push(" ");
            }
        }

        board.push(rowArray);
    }

    return board;
}

let numRows = 3;
let numCols = 3;
let content = [
    { row: 0, col: 0, value: "X" },
    { row: 0, col: 1, value: "X" },
    { row: 0, col: 2, value: "O" },
    { row: 1, col: 0, value: "O" },
    { row: 1, col: 2, value: "X" },
    { row: 2, col: 0, value: "X" },
    { row: 2, col: 1, value: "O" },
    { row: 2, col: 2, value: "O" },
];

console.table(createGameBoard(numRows, numCols, content));
