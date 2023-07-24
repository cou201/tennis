import React from 'react'
import "./listaProductos.css"
import StarIcon from '@mui/icons-material/Star';

const ListaProductos = () => {
  return (
  <>
  <h1 className='Titulos-productos'>PRODUCTOS CYBERDAYS</h1>
    <div className='contenedor-todos-los-productos'>
         <section className='contendor-carta'>
        <section className='carta'>
            <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='zapatos' className='image-carta'></img>
            <div className='detalles-de-la-carta'>
             <h3 className='titulo-carta'>ZAPATOS</h3>
             <div className='contenedor-estrellas'> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></div>
             <div className='price'>
                <del>$300.000</del>200.00
             </div>
             <span className='recomendado-seccion'> recomendado</span>
            </div>  
        </section>
     </section>
     <section className='contendor-carta'>
        <section className='carta'>
            <img src='https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg' alt='zapatos' className='image-carta'></img>
            <div className='detalles-de-la-carta'>
             <h3 className='titulo-carta'>ZAPATOS</h3>
             <div className='contenedor-estrellas'> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></div>
             <div className='price'>
                <del>$300.000</del>200.00
             </div>
             <span className='recomendado-seccion'> recomendado</span>
            </div>  
        </section>
     </section>
         <section className='contendor-carta'>
        <section className='carta'>
            <img src='https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg' alt='zapatos' className='image-carta'></img>
            <div className='detalles-de-la-carta'>
             <h3 className='titulo-carta'>ZAPATOS</h3>
             <div className='contenedor-estrellas'> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></div>
             <div className='price'>
                <del>$300.000</del>200.00
             </div>
             <span className='recomendado-seccion'> recomendado</span>
            </div>  
        </section>
     </section>
    </div>
    {/* ///Segundo */}
    <div className='contenedor-todos-los-productos'>
         <section className='contendor-carta'>
        <section className='carta'>
            <img src='https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg' alt='zapatos' className='image-carta'></img>
            <div className='detalles-de-la-carta'>
             <h3 className='titulo-carta'>ZAPATOS</h3>
             <div className='contenedor-estrellas'> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></div>
             <div className='price'>
                <del>$300.000</del>200.00
             </div>
             <span className='recomendado-seccion'> recomendado</span>
            </div>  
        </section>
     </section>
     <section className='contendor-carta'>
        <section className='carta'>
            <img src='https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg' alt='zapatos' className='image-carta'></img>
            <div className='detalles-de-la-carta'>
             <h3 className='titulo-carta'>ZAPATOS</h3>
             <div className='contenedor-estrellas'> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></div>
             <div className='price'>
                <del>$300.000</del>200.00
             </div>
             <span className='recomendado-seccion'> recomendado</span>
            </div>  
        </section>
     </section>
         <section className='contendor-carta'>
        <section className='carta'>
            <img src='https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg' alt='zapatos' className='image-carta'></img>
            <div className='detalles-de-la-carta'>
             <h3 className='titulo-carta'>ZAPATOS</h3>
             <div className='contenedor-estrellas'> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></div>
             <div className='price'>
                <del>$300.000</del>200.00
             </div>
             <span className='recomendado-seccion'> recomendado</span>
            </div>  
        </section>
     </section>
    </div>
    <div className='texto-seo-al-final'>
     <p>Bienvenidos a nuestra apasionante marca de ropa, donde la moda y el estilo se fusionan para expresar tu personalidad única y audaz. Nuestra marca se enorgullece de crear prendas que destacan por su calidad, diseño innovador y un toque de vanguardia. Ya seas un amante de la moda o simplemente buscas vestirte con confianza, tenemos algo especial para ti.</p>
    </div>
     </>
  )
}

export default ListaProductos