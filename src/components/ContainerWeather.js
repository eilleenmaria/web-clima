import React, {useState} from 'react'
import FormSearchs from './FormSearchs';
import WeatherTable from './WeatherTable';

const ContainerWeather = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?&appid=8463844bc7b8b6a16c856a476d162368&lang=es";
    let urlCity = "&q=";
    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?&appid=8463844bc7b8b6a16c856a476d162368&lang=es";
    
    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");
    const [error, setError] = useState(""); 
    
    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);
        setError("");
        urlWeather = urlWeather + urlCity + loc;
        urlForecast = urlForecast + urlCity + loc;        

    try {
      const weatherResponse = await fetch(urlWeather + urlCity + loc);
      if (!weatherResponse.ok) throw new Error('Ciudad no encontrada');
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);

      const forecastResponse = await fetch(urlForecast + urlCity + loc);
      if (!forecastResponse.ok) throw new Error('Se presento un error en la respuesta');
      const forecastData = await forecastResponse.json();
      setForecast(forecastData);

      setShow(true);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setShow(false);
    }
  };  
    // Función para cerrar el mensaje de error
  const closeError = () => setError("");

  return (
    <React.Fragment>
        <FormSearchs newLocation = {getLocation}/>

        {/* Renderiza el mensaje de error si existe */}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <strong className="font-bold">¡Error!</strong>
          <span className="block sm:inline">{error}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={closeError}>
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
        <WeatherTable
         showData = {show}
         loadingData = {loading}
         weather = {weather}
         forecast = {forecast}/>
    </React.Fragment>
  )
}

export default ContainerWeather