import React, {useState} from "react";

function Square(props) {
    const row = props.value[0];
    const col = props.value[1];
    const [value, setValue] = useState('');

    const determineClassname = (rowInSquareClassnames, col, isBackgroundGray) => {
        let name = 'square';
        if (rowInSquareClassnames) {
            if (rowInSquareClassnames[col]) {
                name += ' hover';
            }
        }
        if (isBackgroundGray) {
            name += ' gray'
        }
        return name;
    }

    const onChange = (event) => {
        const BACKSPACE = '';
        const input = event.target.value;
        if (!isNaN(input)) {
            setValue(input.length === 1 || input === BACKSPACE ? input : input[1]);
        }
    }


    return (
        <input
            className={determineClassname(props.squareClassname[row], col, props.grayBackground)}
            onMouseEnter={props.highlight}
            onMouseLeave={props.removeHighlight}
            value={value}
            onChange={(event) => onChange(event)}
        />

    )
}

export default Square;