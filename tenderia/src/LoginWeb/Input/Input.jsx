import React from 'react';
import './Input.css';

const Input = ({ attribute, handleChange, param }) => {
    return (
        <div className='input-contenido'>
            <input 
                id= {attribute.id}
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={param ? 'input-error': 'regular-style'}
                //Si mi parametro es input verdadero, muestrame input y si es falso muestrame regular
            ></input>
        </div>
    )
};

export default Input;

/*
ID
MAIN PLACEHOLDER
TYPE
EVENT
CLASSNAME***/