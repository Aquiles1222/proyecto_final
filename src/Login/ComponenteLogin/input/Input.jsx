import React from "react";
import './Input.css';

const Input = ({ attribute, handleChange, param }) => {
    return (
        <div>
            <input 
            className= "input-style"
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            onChange={(e) => handleChange(e.target.name, e.target.value)}

            />
        </div>
    )
};

export default Input;