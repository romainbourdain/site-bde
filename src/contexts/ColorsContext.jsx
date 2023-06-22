import {createContext, useContext, useState} from "react";

const ColorsContext = createContext();

export const useColors = () => {
    return useContext(ColorsContext);
}

export const ColorsProvider = ({children}) => {
    const [negative, setNegative] = useState(false);
    return (
        <ColorsContext.Provider value={{negative, setNegative}}>
            {children}
        </ColorsContext.Provider>
    );
}