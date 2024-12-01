import React, { createContext, useContext, useReducer } from 'react';
import { initialstate,reducer } from './Reducer';
const UsignContextApi = createContext(); 

function Contextapi({ children }) {
   
    const [state, dispatch] = useReducer(reducer, initialstate);

    return (
        <UsignContextApi.Provider value={{ dispatch, watchlist: state.watchlist,watched: state.watched }}>
            {children} 
        </UsignContextApi.Provider>
    );
}


export const useShareData = () => {
    return useContext(UsignContextApi);
}

export default Contextapi;