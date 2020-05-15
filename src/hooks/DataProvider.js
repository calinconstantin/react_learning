import React, { createContext, useState, useContext } from 'react';
import { useDataHook } from './DataHook';


export const DataContext = createContext();


const DataProvider = ({ children }) => {

    const { data, setData } = useDataHook();

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
};

export const useDataValue = () => useContext(DataContext);


export default DataProvider;


