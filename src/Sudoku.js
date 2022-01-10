import React from "react";
import Board from './Board';

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