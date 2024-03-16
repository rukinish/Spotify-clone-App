import React,
{
    createContext,
   // useContext,
    useReducer
} from "react";

export const DataLayerContext = createContext(); // prepares datalayer

export const DataLayer = ({ initialState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);