import React, {useState} from "react";

function Square(props) {
    const row = props.value[0];
    const col = props.value[1];
    const squareClassname = props.squareClassname;
    const addGrayBackground = props.grayBackground;

    const [value, setValue] = useState('');

    const determineClassname = (squareClassname, isBackgroundGray) => {
        let name = 'square';
        if (squareClassname[row]) {
            if (squareClassname[row][col]) {
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
        if (input === BACKSPACE)
            setValue(BACKSPACE);
        else if (!isNaN(input)) {
            if (input.length === 1)
                setValue(input !== '0' ? input : value);
            else {
                const secondDigit = input[1];
                setValue(secondDigit !== '0' ? secondDigit : value);
            }
        }
    }

    return (
        <input
            className={determineClassname(squareClassname, addGrayBackground)}
            onMouseEnter={props.highlight}
            onMouseLeave={props.removeHighlight}
            value={value}
            onChange={(event) => onChange(event)}
        />

    )
}

export default Square;