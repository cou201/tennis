import React, { useState, useEffect } from 'react';
import Logo from "../images/logo2.png";
import "./header.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleButtonClick = () => {
    setSearchActive(!searchActive);
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleDocumentClick = (e) => {
    if (!e.target.closest('.contendor-busquedar-header')) {
      setSearchActive(false);
    }
  };

  useEffect(() => {
    if (searchActive) {
      document.addEventListener('click', handleDocumentClick);
    }
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [searchActive]);

  return (
    <section className='contenedor-total-del-header'>
      <div className='icono-tiendas-header'>
        <a href='https://www.tennis.com.co/localiza-tu-tienda'>
          <LocationOnOutlinedIcon />
          <h2>TIENDAS</h2>
        </a>
      </div>
      <div className='contenedor-unicamente-logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className={`contendor-busquedar-header ${searchActive ? 'active' : ''}`}>
        <button onClick={handleButtonClick}>
          <SearchOutlinedIcon style={{ display: searchActive ? 'none' : 'inline' }} />
          <p style={{ display: searchActive ? 'none' : 'inline' }}>Busca tus favoritos</p>
        </button>
        {searchActive && (
          <input
            type="text"
            value={searchText}
            onChange={handleSearchInputChange}
            placeholder="Escribe tu búsqueda..."
          />
        )}
        {searchActive && <div className="search-indicator">Escribe para buscar</div>}
      </div>
    </section>
  )
}

export default Header;