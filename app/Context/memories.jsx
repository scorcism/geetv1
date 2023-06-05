'use client';

import { createContext, useContext, useState, useEffect } from "react";



const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    let URL = `http://localhost:5000/api`

    const [memories, setMemories] = useState([]);
    const [mood, setMood] = useState();

    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [progress, setProgress] = useState(0)
    const getMemories = async () => {
        setProgress(0);
        const requestOptions = {
            method: "GET",
        };

        // await new Promise((resolve)=>setTimeout(resolve,1000));

        await fetch(`${URL}/getmemories?page=${page}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                // let D = data.mempries;
                // if(memories.length != 0){
                //     setMemories(memories.push(D))
                // }else{
                //     setMemories(D);
                //     // setMemories(data.memories);
                // }

                const newMemories = data.memories;
                const updatedMemories = [...memories, ...newMemories];

                setMemories(updatedMemories)
                // setMemories(data.memories)
                setPageCount(data.pagination.pageCount);
                setProgress(100);
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

    // let memories_shuffled = shuffle(Object.values(memories));

    // memories_shuffled = memories;

    useEffect(() => {
        getMemories()
    }, [page])

    // console.log(alert)

    return (
        <GlobalContext.Provider value={{ URL, memories, alert, setShowAlert, setMood, mood, page, setPage, pageCount, setPageCount,progress, setProgress }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
