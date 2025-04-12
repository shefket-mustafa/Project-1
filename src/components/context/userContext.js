import { createContext, useContext } from "react";

export const UserContext = createContext({
    data: '',
    theme: '',
    inputHandler: () => null,
    searchHandler: () => null,
    errorHandler: () => null,



})

export function useUserContext(){
    const data = useContext(UserContext);
    return data;
};