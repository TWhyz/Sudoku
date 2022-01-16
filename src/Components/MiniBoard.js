import React from "react";
import Square from "./Square";

class MiniBoard extends React.Component {

    renderSquare(row, col, grayBackground) {
        const key = `${row}${col}`;
        return (
            <Square
                key={key}
                value={key}
                onClick={() => this.props.onClick(row, col)}
                highlight={() => this.props.highlight(row, col)}
                removeHighlight={() => this.props.removeHighlight(row, col)}
                squareClassname={this.props.squareClassname}
                grayBackground={grayBackground}
            />
        )
    }

    buildMiniBoard() {
        let size = this.props.size;
        let rowOfSquares = [];
        let rowKeyForSquare = this.props.row;
        let colKeyForSquare = this.props.col;

        const miniboard = [];

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                rowOfSquares.push(
                    this.renderSquare(
                        rowKeyForSquare,
                        colKeyForSquare,
                        this.props.grayBackground
                    )
                )
                colKeyForSquare++;
            }
            miniboard.push(
                <div className="square-row" key={row}>
                    {rowOfSquares}
                </div>
            )
            rowOfSquares = [];
            colKeyForSquare = this.props.col;
            rowKeyForSquare++
        }

        return miniboard;
    }

    render() {
        return (
            <div className="mini-board">
                {this.buildMiniBoard()}
            </div>
        )
    }
}

export default MiniBoard;