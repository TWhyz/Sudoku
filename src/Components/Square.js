import React, {useState} from "react";

function Square(props) {
    const row = props.value[0];
    const col = props.value[1];
    const highlightedSquares = props.squareClassname[row] ? props.squareClassname[row][col] : '';
    const classname = highlightedSquares + ` ${props.grayBackground ? 'square gray' : 'square'}`;

    const [value, setValue] = useState('')

    const isValid = (value) => {
        return !isNaN(value) && value < 9 && value > 0;
    }

    const onChange = (e) => {
        const input = e.target.value;
        console.log(input)
        console.log(e)
        if (isValid(input)) setValue(input);
    }

    return (
        <input
            className={classname}
            // onClick={props.onClick}
            onMouseEnter={props.highlight}
            onMouseLeave={props.removeHighlight}
            value={value}
            onChange={onChange}
        />
    )
}

export default Square;