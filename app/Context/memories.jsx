'use client';

import { createContext, useContext, useState, useEffect } from "react";


const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    let URL = `http://localhost:5000/api`

    const [memories, setMemories] = useState([]);

    const getMemories = async () => {

        const requestOptions = {
            method: "GET",
        };

        // await new Promise((resolve)=>setTimeout(resolve,1000));

        await fetch(`${URL}/getmemories`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setMemories(data);
            })
    }


    useEffect(() => {
        getMemories()
    }, [])

    return (
        <GlobalContext.Provider value={{ URL, memories }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
