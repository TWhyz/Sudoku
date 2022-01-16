import React from "react";
import Board from './Board';

class Sudoku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(Array(9).fill(null)),
            highlightedSquares: Array(9).fill(null),
        }
    }

    handleClick(row, col) {
        console.log(`i = ${row}, j = ${col}`);
        console.log(this.state.board);
    }

    highlightRowAndColumn(row, col) {
        let highlighted = this.state.highlightedSquares.slice();

        for (let r = 0; r < highlighted.length; r++) {
            highlighted[r] = Array(9).fill(null);

            for (let c = 0; c < highlighted[r].length; c++) {
                if (highlighted[row]) highlighted[row][c] = 'hover';
                highlighted[r][col] = 'hover';
            }
        }

        this.setState({
            highlightedSquares: highlighted,
        });
    }

    removeHighlight(row, col) {
        this.setState({
            highlightedSquares: Array(9).fill(null),
        });
    }


    render() {
        const size = 3;
        return (
            <Board
                size={size}
                onClick={(row, col) => this.handleClick(row, col)}
                highlight={(row, col) => this.highlightRowAndColumn(row, col)}
                removeHighlight={(row, col) => this.removeHighlight(row, col)}
                board={this.state.board}
                squareClassname={this.state.highlightedSquares}
            />
        );
    }
}

export default Sudoku;