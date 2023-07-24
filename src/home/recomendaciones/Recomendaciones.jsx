import React from 'react'
import "./Recomendaciones.css"

const Recomendaciones = () => {
  return (
    <div>
       <h2 className='titulo-de-recomendaciones'>Recomendaciones</h2>
        <div className='contenedor-de-las-recomendaciones'>
        <button className='botones-recomendaciones'>Todos los productos</button>
        <button className='botones-recomendaciones'>Hombre</button>
        <button className='botones-recomendaciones'>Mujer</button>
        <button className='botones-recomendaciones'>Niño</button>
        <button className='botones-recomendaciones'>Niña</button>
        <button className='botones-recomendaciones'>Descuento</button>
       </div>        
    </div>
  )
}

export default Recomendaciones