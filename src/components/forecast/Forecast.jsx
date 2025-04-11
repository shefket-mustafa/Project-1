import './forecast.css';

export default function Forecast() {
  return (

    <>
    <div className='search'>
        <div className="search-container">
        <input type="text" className="search-input" placeholder="What is the weather like in your city?" />
        <button className='search-btn'>Search</button>
        </div>

        <section className="forecast-container">

            <form className='forecast-form'>

                <label htmlFor="location">Location: </label>
                <input type="text" name="location" disabled placeholder='city'/>
                <input type="text" name="location" disabled placeholder='country' />

                <label htmlFor="current-time">Current time:</label>
                <input type="text" name='current-time' placeholder='Date and time' disabled/> 

                <label htmlFor="current-weather">Weather:</label>
                <input type="text" name='current-weather-c' placeholder='Current temperature °C' disabled/> 
                <input type="text" name='current-weather-f' placeholder='Current temperature °F' disabled/> 
                <input type="text" name='current-condition' placeholder='Current Condition' disabled/> 
                <input type="text" name='feels-like' placeholder='Feels like' disabled/> 
                <input type="text" name='wind-kmh' placeholder='Wind speed kmh' disabled/> 
                <input type="text" name='feels-mph' placeholder='Wind speed mph' disabled/> 



            </form>
        </section>
        </div>
    </>
    );
}