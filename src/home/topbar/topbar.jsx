import React, { useState, useEffect } from 'react';
import "./topbar.css";

const messages = [
  "ENVIOS GRATIS POR COMPRAS DESDE $200.000",
  "SOLO POR HOY 30% OFF EN PRENDAS DE VERANO | APLICAN TyC",
  "SUPER SALE! | DESCUBRE LOS MEJORES DESCUENTOS | ENTRA YA!",
  // Agrega más mensajes si lo deseas
];

const Topbar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      // Configura un intervalo para cambiar el mensaje cada 3 segundos (3000 milisegundos)
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
      }, 3000);
  
      // Limpia el intervalo cuando el componente se desmonte o cuando el currentIndex cambie
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    return (
      <section className='topbar-descuentos-visibles'>
        {messages.map((message, index) => (
          <p
            key={index}
            className={index === currentIndex ? 'active' : ''}
            style={{
              animation: `${index === currentIndex ? 'fadeIn' : 'fadeOut'} 1s`,
              opacity: index === currentIndex ? 1 : 0
            }}
          >
            {message}
          </p>
        ))}
        <div className='iniciar-seccion-necesitas-ayuda-conteiner'>
            <a href='https://www.tennis.com.co/links-de-interes'>
                 <span>
            ¿Necesitas ayuda?
          </span>
            </a>
         
          |
          <a href='https://www.tennis.com.co/login?returnUrl=%2Flinks-de-interes'>
              <span>
            INICIAR SESION
          </span>
          </a>
        
        </div>
      </section>
    );
  };
  
  export default Topbar;