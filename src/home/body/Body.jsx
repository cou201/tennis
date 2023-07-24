import React from 'react'
import "./Body.css"
import bannerSecundarioDesk from "../images/banne-secundario-desk.jpg"
import  bannerSecundarioMobile from "../images/banner-secundario-mobile.jpg"
import nuevaModaUno from "../images/seguro-moda-nueva-uno.jpg"
import nuevaModaDos from "../images/seguro-moda-nueva-dos.jpeg"

const Body = () => {
  return (
    <section className='contenedor-del-body-completo'>
        <div className='contendor-botones-categorizacion-especiales'>
                    <a class="contendor-de-los-botones" href="https://www.tennis.com.co/cyberdays">
  <span class="animacion-llave"></span>
  <span class="texto-del-boton">CyberDays</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>
<a class="contendor-de-los-botones" href="https://www.tennis.com.co/links-de-interes/site-map">
  <span class="animacion-llave"></span>
  <span class="texto-del-boton">Site Map</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>
<a class="contendor-de-los-botones" href="https://www.tennis.com.co/links-de-interes/guia-de-tallas">
  <span class="animacion-llave"></span>
  <span class="texto-del-boton">Guia de tallas</span>
  <span class="bottom-key-1"></span>
  <span class="bottom-key-2"></span>
</a>
        </div>
        <div className='contenedor-unicamente-banner-secundario'>
          <a href='https://www.tennis.com.co/sale'>
            <picture>
               <source media="(min-width:1080px)" srcSet={bannerSecundarioDesk}/> 
                <img src={bannerSecundarioMobile} alt="banners home"></img>  
           </picture>  
        </a>
        </div>
   <div className='contenedor-nueva-moda'>
     <img src={nuevaModaUno} alt='imagen de nueva moda'></img>
     <img src={nuevaModaDos} alt='imagen de nueva moda'></img>
   </div>
    </section>
  )
}

export default Body