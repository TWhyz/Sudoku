import './App.css';
import React from 'react';

function Square(props) {
    const classname = `square ${props.classname}`;
    return (
        <button className={classname} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

function MiniBoard(props) {
    const size = props.size;
    const miniboard = [];

    let rowOfSquares = [];
    let rowKeyForSquare = props.row;
    let colKeyForSquare = props.col;
    let value = [];

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            value = `[${rowKeyForSquare}, ${colKeyForSquare}]`;
            rowOfSquares.push(
                <Square key={value}
                        value={value}
                        onClick={() => props.onClick(rowKeyForSquare, colKeyForSquare)}/>
            )
            colKeyForSquare++;
        }
        miniboard.push(
            <div className="square-row" key={row}>
                {rowOfSquares}
            </div>
        )
        rowOfSquares = [];
        colKeyForSquare = props.col;
        rowKeyForSquare++
    }

    return (
        <div className="mini-board">
            {miniboard}
        </div>
    )
}


function Board(props) {
    const size = props.size;
    const board = [];
    let rowOfMiniBoards = [];
    let rowKeyForSquare = 0;
    let colKeyForSquare = 0;

    // build 9 mini-boards with 3 rows, 3 columns
    // size = 3
    //                 board #1                 board #2            board #3
    // row #1 key      row = 0 col = 0          row = 0, col = 3    row = 0, col = 6
    // row #2 key      row = 3 col = 0          row = 3, col = 3    row = 3, col = 6
    // row #3 key      row = 6 col = 0          row = 6, col = 3    row = 6, col = 6

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            rowOfMiniBoards.push(
                <MiniBoard row={rowKeyForSquare}
                           col={colKeyForSquare}
                           onClick={props.onClick}
                           size={size}
                           key={[row, col]}
                           board={props.board}
                />
            )
            colKeyForSquare += size;
        }

        board.push(
            <div className="board-row" key={row}>
                {rowOfMiniBoards}
            </div>
        )
        rowOfMiniBoards = [];
        rowKeyForSquare += size;
        colKeyForSquare = 0;
    }

    return (
        <div className="board">
            {board}
        </div>
    )
}

class Sudoku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(Array(9).fill(null)),
        }
    }

    handleClick(i, j) {
        console.log(`i = ${i}, j = ${j}`);
        console.log(this.state.board);
    }

    render() {
        return (
            <Board size={3} onClick={(i, j) => this.handleClick(i, j)} board={this.state.board}/>
        )
    }
}


export default Sudoku;
