import React from 'react';

import ContainerWeather from '../components/ContainerWeather';

const Home = () => {
  return (
    
    // Contenedor principal 
    <div className='relative  w-full h-screen mx-auto bg-neutral-300'>
      {/* Renderiza el componente ContainerWeather para mostrar la información meteorológica */}
      <ContainerWeather/>
        
    </div>
  )
}

export default Home