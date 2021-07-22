import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error'


const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    // Definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        } 
        // si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

       
    return ( 
        <Fragment>
            <h2>¿Cúanto es tu presupuesto?</h2>
            {error ? <Error mensaje='El monto ingresado no es válido'/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                type='number'
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
                onChange={definirPresupuesto}
                />
                <input 
                type='submit' 
                value='Definir presupuesto' 
                className='button-primary u-full-width'
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarRestante:PropTypes.func.isRequired,
    actualizarPregunta:PropTypes.func.isRequired,
    guardarPresupuesto:PropTypes.func.isRequired
}
 
export default Pregunta;