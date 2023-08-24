import React, { useState } from 'react';
import './styles.css'
export const Counter = ({value , subtitulo}) => {

    const [counter,setCounter] = useState(value)


    const sumar = () => {
      setCounter(counter + 1 )
    }

    const restar = () => {
      setCounter(counter - 1 )
    }
    const reset= () => {
      setCounter( value ) 
    }

  return (
    <>
        <h1>Contador</h1>
        <h3>{subtitulo}</h3>
        <h2>{counter}</h2>


        <button className='boton'onClick={sumar}>sumar</button>
        <button className='boton'onClick={restar}>restar</button>
        <button className='boton'onClick={reset}>resetear</button>

    </>
  )
}
