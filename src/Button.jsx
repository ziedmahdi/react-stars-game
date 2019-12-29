import React from 'react';

/**
 * 
 * @param {*} props.number,
 * @param {*} props.color,
 * @param {*} props.disabled,
 * @param {*} props.handleClick a function to excute when the button is clicked called with the button number as first a 
 *  
 */
const Button = (props) => {
    let on = props.on || false;
    console.log(props.number, on.toString())
    const whenTheButtonIsClicked = (event) => {
        on = !on;
        if (typeof props.handleClick == 'function') {
            props.handleClick(props.number, on, event);
        }
    };

    return (   
        <button disabled={props.disabled} onClick={whenTheButtonIsClicked} className={'semantic ui button ' + (props.color || '')}>{props.number}</button>
    ) 
}

export default Button; 
