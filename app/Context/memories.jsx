'use client';

import { createContext, useContext, useState, useEffect } from "react";
import { filterObject, shuffle } from "lodash";


const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    let URL = `http://localhost:5000/api`

    const [memories, setMemories] = useState([]);
    const [mood, setMood] = useState();

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


    const [alert, setAlert] = useState(null)

    const setShowAlert = (mes, stat) => {
        // console.log("inside setShowAlert function")
        setAlert({
            message: mes,
            status: stat
        })
        // console.log("inside swtshowalert function")
        // console.log(message +" mesg " + status)

        // after 2 seconds dismiss the alert
        setTimeout(() => {
            setAlert(null);
        }, 2000)
    }
    
    let memories_shuffled = shuffle(Object.values(memories));

    memories_shuffled = memories;

    useEffect(() => {
        getMemories()
    }, [])

    // console.log(alert)

    return (
        <GlobalContext.Provider value={{ URL, memories, alert, setShowAlert, setMood, mood, memories_shuffled }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
