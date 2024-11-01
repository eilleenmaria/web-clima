import React from 'react';
import { Link } from "react-router-dom";

/**
 * Componente Header que representa la barra de navegación de la aplicación.
 *
 * Este componente contiene el logo de la aplicación y un enlace a la página principal.
 * Se utiliza para proporcionar navegación a los usuarios en la aplicación.
 *
 * @returns {JSX.Element} Elemento JSX que representa el encabezado de la aplicación.
 */
const Header = () => {
  return (
    <nav
  className="relative flex w-full flex-wrap items-center justify-between  bg-gradient-to-b from-fuchsia-300 to-neutral-300 md:h-[150px] py-2 shadow-dark-mild  lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div>
      <Link className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" to="/">
        <img
          className="me-2"
          src="clima.ico"
          style={ {height:"60px"}}
          alt="Logo Web Clima "
          loading='lazy'/>
        <span className="bg-gradient-to-r from-fuchsia-700 via-fuchsia-500 to-blue-600 inline-block text-transparent bg-clip-text  text-[30px]">Web Clima</span>
      </Link>
    </div>
  </div>
</nav>
  )
}

export default Header