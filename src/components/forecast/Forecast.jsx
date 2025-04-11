import { useEffect, useState } from 'react';
import './forecast.css';
import { requester } from '../../api/requester';

export default function Forecast() {
    const [input, setInput] = useState('');
    const [data, setData] = useState({});
    const [isSearchedClicked, setIsSearchClicked] = useState(false);

    useEffect(()=>{
        if(isSearchedClicked){
            const result = requester(input)
            .then(result => setData(result));
            setIsSearchClicked(false);
        };
    },[input,isSearchedClicked]);

    const searchHandler = () =>{
        setIsSearchClicked(true)
        console.log(data.current);
    };

  return (

    <>
    <div className='search'>
        <div className="search-container">
        <input type="text" onChange={(e) => setInput(e.target.value)} className="search-input" placeholder="What is the weather like in your city?" />
        <button onClick={searchHandler} className='search-btn'>Search</button>
        </div>

        <section className="forecast-container">

            <form className='forecast-form'>

            <div className='weather-info'>
                <label htmlFor="city">City: </label>
                <input type="text" name="city" disabled placeholder='city' defaultValue={data.location?.name}/>
                </div>
                
                <div className='weather-info'>
                <label htmlFor="country">Country: </label>
                <input type="text" name="country" disabled placeholder='country' defaultValue={data.location?.country}/>
                </div>

                <div className='weather-info'>
                <label htmlFor="current-time">Current time:</label>
                <input type="text" name='current-time' placeholder='Date and time' disabled defaultValue={data.location?.localtime}/> 
                </div>


                <div className='weather-info'>
                <label htmlFor="temp-c">Current temperature °C:</label>
                <input type="text" name='temp-c' placeholder='Current temperature °C' disabled defaultValue={data.current?.temp_c}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="temp-f">Current temperature °F:</label>
                <input type="text" name='-temp-f' placeholder='Current temperature °F' disabled defaultValue={data.current?.temp_f}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="condition">Current condition:</label>
                <input type="text" name='condition' placeholder='Current Condition' disabled defaultValue={data.current?.condition.text}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="feels-like">Feels like:</label>
                <input type="text" name='feels-like' placeholder='Feels like' disabled defaultValue={data.current?.feelslike_c}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="wind-kmh">Wind speed kmh:</label>
                <input type="text" name='wind-kmh' placeholder='Wind speed kmh' disabled defaultValue={data.current?.wind_kph}/> 
                </div>

                <div className='weather-info'>
                <label htmlFor="wind-mph">Wind speed kmh</label>
                <input type="text" name='wind-mph' placeholder='Wind speed mph' disabled defaultValue={data.current?.wind_mph}/> 
                </div>



            </form>
        </section>
        </div>
    </>
    );
}