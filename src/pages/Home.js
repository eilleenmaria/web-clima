import React, { useState } from 'react';
import background from './../assets/img/lluvia.jpg';

const Home = () => {
const[ciudad, setCiudad] = useState("");

const onSubmit = (evento)=>{
  evento.preventDefault();
  console.log({ciudad});
  if(ciudad === ''|| !ciudad)return;
}
  return (
    <div className='relative w-full h-screen mx-auto bg-neutral-300'>
        <section style={{backgroundImage: `url(${background})`}} className='bg-cover bg-no-repeat overflow-hidden flex items-center justify-center h-[18rem] '>
        <div className="w-full max-w-lg min-w-[200px] relative">
            <form onSubmit={onSubmit}>
            <div className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
            
                <input
                className="w-full bg-transparent font-bold placeholder:text-gray-50 text-gray-50 text-sm border border-gray-50 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-gray-50 hover:border-gray-50 shadow-sm focus:shadow"
                placeholder="Ingresa una ciudad..." 
                onChange={(event)=>setCiudad(event.target.value)}
                />
                
                <button
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="submit"
                >
                Search
                </button> 
            </div>
            </form>
        </div>
        </section>
    </div>
  )
}

export default Home