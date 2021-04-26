import React from 'react';
import './titulo.css';

const Titulo = ({ text }) => {
    return (
        <div className = 'titulo'>
            <label className='titulo-label'>{text}</label>
        </div>
    )
};

export default Titulo;


/* FORMAS DE PASAR PROPIEDADES

    CON PROPS EN EL ARGUMENTO EN EL DIV {PROPS}

    CON DESTRUCTURACIÓN, CONST {TEXT} = PROPS

    Y COMBINANDO LAS 2, ({TEXT, DESCRIPTION, TANTOS ARGUMENTOS COMO VAYAN A PASAR}) Y EN EL DIV {TEXT}
*/