import React, {useState} from 'react'
    
const FormSearchs = ({newLocation}) => {
  
    const[city, setCity] = useState("");
    const [error, setError] = useState("");
    
const onSubmit = (evento)=>{
  evento.preventDefault();
  console.log({city});
  if (!city) {
    setError("No haz ingresado datos. Lo sentimos, intenta nuevamente.");
    return;
}
setError("");
  newLocation(city);
}
 // Función para cerrar el mensaje de error
 const closeError = () => setError("");
  return (
    <div className="w-full  max-w-lg min-w-[200px] p-8">
            <form onSubmit={onSubmit}>
            <div className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
            
                <input
                className="w-full bg-transparent font-bold placeholder:text-gray-50 text-gray-50 text-sm border border-gray-50 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-gray-50 hover:border-gray-50 shadow-sm focus:shadow"
                placeholder="Ingresa una ciudad..." 
                onChange={(event)=>setCity(event.target.value)}
                />
                
                <button
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="submit"
                >
                Buscar
                </button> 
            </div>
            </form>
            {/* Renderiza el mensaje de error si existe */}
{error && (
  <div
    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
    role="alert">
    <strong className="font-bold">¡Error!</strong>
    <span className="block sm:inline">{error}</span>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3"  onClick={closeError}>
      <svg
        className="fill-current h-6 w-6 text-red-500"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <title>Close</title>
        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
      </svg>
    </span>
  </div>
)};
        </div>
  )





}

export default FormSearchs
