import React, { useState, useEffect } from 'react';
import "./menu.css";
import primeraImagenDesk from "../images/banner-principal-uno-desk.jpg";
import primeraImagenMobile from "../images/banner-principal-uno-mobile.jpg";
import segundaImagenDesk from "../images/banner-principal-dos-desk.jpg";
import segundaImagenMobile from "../images/banner-principal-dos-mobile.jpg";

const Menu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { desktop: primeraImagenDesk, mobile: primeraImagenMobile },
    { desktop: segundaImagenDesk, mobile: segundaImagenMobile },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  return (
    <section className='seccion-menu-completa-contenedor-y-banner-principal'>
      <div className='contendor-unicamente-menu'>
        <ul className='listado-categorias-menu'>
          <li><a href='https://www.tennis.com.co/nueva-coleccion?order=OrderByReleaseDateDESC'>Nuevo</a></li>
          <li><a href='https://www.tennis.com.co/ropa-mujer?order=OrderByReleaseDateDESC'>Mujer</a></li>
          <li><a href='https://www.tennis.com.co/ropa-hombre?order=OrderByReleaseDateDESC'>Hombre</a></li>
          <li><a href='https://www.tennis.com.co/unisex'>Unisex</a></li>
          <li><a href='https://www.tennis.com.co/ninas?order=OrderByReleaseDateDESC'>Niña</a></li>
          <li><a href='https://www.tennis.com.co/ninos?order=OrderByReleaseDateDESC'>Niño</a></li>
          <li><a href='https://www.tennis.com.co/mascotas'>Mascotas</a></li>
          <li className='unica-negrilla-menu'><a href='https://www.tennis.com.co/sale'> Super sale</a></li>
          <li><a href='https://www.linkedin.com/company/tennis-sa/'>Blog</a></li>
        </ul>
      </div>
      <div className='banners-principales-con-carrusel'>
        {images.map((image, index) => (
          <img
            key={index}
            src={window.innerWidth >= 1080 ? image.desktop : image.mobile}
            alt={`Banner ${index}`}
            className={index === currentSlide ? 'active' : ''}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;