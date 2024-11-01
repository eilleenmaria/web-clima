import React from 'react';
import Spinner from './Spinner';
import background from '../assets/img/lluvia.jpg';

const WeatherTable = ({loadingData, showData, weather, forecast}) => {

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + '/' + month + '/' + year;

  let url = "";
  let iconUrl = "";
  let iconUrl_3h = "";
  let iconUrl_6h = "";
  let iconUrl_9h = "";

  let forecast_date_3h = "";
  let forecast_date_6h = "";
  let forecast_date_9h = ";";


  if(loadingData){
    return <Spinner/>
  }
  if(showData){
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl_3h = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl_6h = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl_9h = url + forecast.list[3].weather[0].icon + ".png";

    forecast_date_3h = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
    forecast_date_6h = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
    forecast_date_9h = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
  
  }
    return (
     <div>
        { 
          showData===true?(
            <div className='px-6'>
              <div className='flex flex-col items-center'>
                <span className='text-bold'>{weather.name}</span>
                <span>{date}</span>
              </div>
              <table className="min-w-full border divide-y divide-gray-200">
                <thead className="bg-transparent">
                  <tr>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Temperatura 
                    </th>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Temperatura max
                    </th>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Temperatura min
                    </th>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-transparent divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {weather.main.temp}ºK
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {weather.main.temp_max}ºK
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {weather.main.temp_min}ºK
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    <img src={iconUrl} alt="icon"/>{weather.weather[0].description}
                    </td>
                  </tr>                  
                </tbody>
                <thead className="bg-transparent">
                  <tr>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      SensacionTermica 
                    </th>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Humedad
                    </th>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Velocidad del viento
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-transparent divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {weather.main.feels_like}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {weather.main.humidity}%
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {weather.wind.speed}m/s
                    </td>
                  </tr>
                  
                </tbody>
                <thead className="bg-transparent">
                  <tr>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Pronostico del tiempo
                    </th>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                     
                    </th>
                    <th
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                     
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-transparent divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {forecast_date_3h}h 
                    <img src={iconUrl_3h} alt="icon"/>{forecast.list[1].weather[0].description}
                    <p> {forecast.list[1].main.temp}ºK</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {forecast_date_6h}h 
                    <img src={iconUrl_6h} alt="icon"/>{forecast.list[2].weather[0].description}
                    <p> {forecast.list[2].main.temp}ºK</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {forecast_date_9h}h 
                    <img src={iconUrl_9h} alt="icon"/>{forecast.list[3].weather[0].description}
                    <p> {forecast.list[3].main.temp}ºK</p>
                    </td>
                  </tr>
                  
                </tbody>
            </table>
              </div> 
           
           ):(
            <div className='bg-cover bg-no-repeat' 
            style={{ backgroundImage: `url(${background})`, height:'400px' }}></div>
           )
        } 
     </div>
   
  )
}

export default WeatherTable