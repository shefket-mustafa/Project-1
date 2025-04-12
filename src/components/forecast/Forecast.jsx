import { useEffect, useState } from 'react';
import './forecast.css';

import { useUserContext } from '../context/userContext';

import Rain from '../rain/Rain';
import Snow from '../snow/Snow';

export default function Forecast() {
        const {inputHandler, searchHandler, data, theme} = useUserContext();
        

  return (

    <>

    {theme === 'rainy' && <Rain />}
    {theme === 'snowy' && <Snow />}
    

    <div className={`search ${theme}`}>
        <div className="search-container">
        <input type="text" onChange={(e) => inputHandler(e.target.value)} className="search-input" placeholder="What is the weather like in your city?" />
        <button onClick={searchHandler} className='search-btn'>Search</button>
        </div>

        <section className="forecast-container">

            <form className='forecast-form'>

            <div className='weather-info'>
                <label htmlFor="city">City: </label>
                <input type="text" name="city" disabled placeholder='city' defaultValue={data ? data.location?.name : ''}/>
                </div>
                
                <div className='weather-info'>
                <label htmlFor="country">Country: </label>
                <input type="text" name="country" disabled placeholder='country' defaultValue={data ? data.location?.country : ''}/>
                </div>

                <div className='weather-info'>
                <label htmlFor="current-time">Current time:</label>
                <input type="text" name='current-time' placeholder='Date and time' disabled defaultValue={data ? data.location?.localtime : ''}/> 
                </div>


                <div className='weather-info'>
                <label htmlFor="temp-c">Current temperature °C:</label>
                <input type="text" name='temp-c' placeholder='Current temperature °C' disabled defaultValue={data ? data.current?.temp_c : ''}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="temp-f">Current temperature °F:</label>
                <input type="text" name='-temp-f' placeholder='Current temperature °F' disabled defaultValue={data ? data.current?.temp_f : ''}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="condition">Current condition:</label>
                <input type="text" name='condition' placeholder='Current Condition' disabled defaultValue={data ? data.current?.condition.text : ''}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="feels-like">Feels like:</label>
                <input type="text" name='feels-like' placeholder='Feels like' disabled defaultValue={data ? data.current?.feelslike_c : ''}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="wind-kmh">Wind speed kmh:</label>
                <input type="text" name='wind-kmh' placeholder='Wind speed kmh' disabled defaultValue={data ? data.current?.wind_kph : ''}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="wind-mph">Wind speed kmh</label>
                <input type="text" name='wind-mph' placeholder='Wind speed mph' disabled defaultValue={data ? data.current?.wind_mph : ''}/> 
                </div>



            </form>
        </section>
        </div>
    </>
    );
}