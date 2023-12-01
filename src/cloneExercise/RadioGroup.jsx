import * as React from "react";
import { cloneElement, Children } from 'react';

export const RadioGroup = ({ onChange, selected, children }) => {
    const RadioOptions = Children.map(children, (child)=> {
        return cloneElement(child, {
            onChange,
            checked: child.props.value === selected,
        });
    });
    return <div>{RadioOptions}</div>
};

export const RadioOption = ({ value, checked, onChange, children }) => {
    return (
        <div>
            <input id={value} type="radio" name={value} checked={checked} onChange={(e)=> {onChange(e.target.value)}} />
            <label htmlFor={value} className="text-xl px-2">{children}</label>
        </div>
    );
};

