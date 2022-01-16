import './Board.css';
import React, { useState } from 'react';
import MiniBoard from './MiniBoard';

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
                           size={size}
                           key={[row, col]}
                           board={props.board}
                           onClick={(i, j) => props.onClick(i, j)}
                           highlight={(i, j) => props.highlight(i, j)}
                           removeHighlight={(i, j) => props.removeHighlight(i, j)}
                           grayBackground={(row % 2 === 0) === (col % 2 === 0)}
                           squareClassname={props.squareClassname}
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

export default Board;
