import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { requester } from "../../api/requester";
import ErrorModal from "../error-modal/ErrorModal";

export default function UserProvider({children}) {

    const [input, setInput] = useState('');
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [isSearchedClicked, setIsSearchClicked] = useState(false);


    useEffect(()=>{
        if(!isSearchedClicked){
            return
        };

        try{
                const result = requester(input)
                .then(result => {
                    if (!result || result.error) {
                        errorHandler(result.error.message)
                        throw new Error(result.error.message);
                    }
                    setData(result)
                });
                setIsSearchClicked(false);
            
        }catch(err){
            errorHandler(err.message)
        };
    },[input,isSearchedClicked]);

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
      }}>

        {error && <ErrorModal message ={error}/>}
        {children}
        </UserContext.Provider>
    );
}