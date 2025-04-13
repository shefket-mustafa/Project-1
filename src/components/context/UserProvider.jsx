import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { requester } from "../../api/requester";
import ErrorModal from "../error-modal/ErrorModal";

export default function UserProvider({children}) {

    const [input, setInput] = useState('');
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [theme, setTheme] = useState('');
    const [isSearchedClicked, setIsSearchClicked] = useState(false);


    useEffect(() => {
        if (!isSearchedClicked) return;

        if(!input) return;
    
        requester(input)
          .then(result => {
            if (!result || result.error) {
              errorHandler(result.error.message);
              throw new Error(result.error.message);
            }
    
            setData(result);
    
            const conditionText = result?.current?.condition?.text.toLowerCase();
            
    
            if (conditionText?.includes('rain')) {
              setTheme('rainy');
            } else if (conditionText?.includes('snow')) {
              setTheme('snowy');
            } else if (conditionText?.includes('sun') || conditionText?.includes('clear')) {
              setTheme('sunny');
            } else if (conditionText?.includes('cloud')) {
              setTheme('cloudy');
            } else {
              setTheme('');
            }
    
            setIsSearchClicked(false);
          })
          .catch(err => {
            errorHandler(err.message);
            setIsSearchClicked(false); 
          });
    }, [input, isSearchedClicked]);

    const errorHandler = (message) => {
        setError(message);
        setTimeout(()=>{
            setError('')
        },2000);
    };

    const inputHandler = (value) => {
        setInput(value)
    }

    const searchHandler = () => {
        setIsSearchClicked(true);
        setData({});
    };

  return (
      <UserContext.Provider value={{
        errorHandler,
        inputHandler,
        searchHandler,
        data,
        theme,
      }}>

        {error && <ErrorModal message ={error}/>}
        {children}
        </UserContext.Provider>
    );
}