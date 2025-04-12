import { useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { requester } from "../../api/requester";

export default function UserProvider({children}) {

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

    const inputHandler = (value) => {
        setInput(value)
    }

    const searchHandler = () => {
        setIsSearchClicked(true);
    };

  return (
      <UserContext.Provider value={{
        inputHandler,
        searchHandler,
        data,
      }}>

        {children}
        </UserContext.Provider>
    );
}