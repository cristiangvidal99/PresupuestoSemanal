import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    // Cuando se agrega un gasto en el input
    const agregarGasto = e => {
        e.preventDefault();

        // Validar datos
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        console.log(gasto);

        // Pasar el gasto al component principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el formulario
        guardarNombre('');
        guardarCantidad(0);
    }
    return ( 
       <form
        onSubmit={agregarGasto}
       >
           <h2>Agregue tus gastos aquí</h2>
            { error ? <Error mensaje='Todos los campos son obligatorios' /> : null }
           <div className='campo'> 
                <label>Nombre del gasto</label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
           </div>
           <div className='campo'> 
                <label>Cantidad del gasto</label>
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 5000'
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
           </div>

           <input
           type="submit" 
           value="Agregar Gasto" 
           className='button-primary u-full-width'
           />
       </form> 
    );
}

Formulario.propTypes = {
    guardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto:PropTypes.func.isRequired
}

export default Formulario;