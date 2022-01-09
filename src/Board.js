import './App.css';
import React from 'react';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

function Board(props) {
    const board = [];
    let boardRows = [];
    const size = props.size;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            boardRows.push(
                <Square value={props.board[i,j]} key={[i, j]} onClick={() => props.onClick(i, j)}/>
            )
        }
        board.push(
            <div className="board-row" key={i}>
                {boardRows}
            </div>
        )
        boardRows = [];
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
            <Board size={9} onClick={(i, j) => this.handleClick(i, j)} board={this.state.board}/>
        )
    }

}


export default Sudoku;
