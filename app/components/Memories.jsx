"use client"

import { useEffect, useState } from "react";

const Memories = () =>{

    let URL = `http://localhost:5000/api`


    const [memories,setMemories] = useState([]);

    const getMemories = () => {

        const requestOptions = {
            method: "GET",

        };
        fetch(`${URL}/getmemories`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setMemories(data);
            }
            )

    }

    useEffect(()=>{
        getMemories()
    },[])


    return (
        <>
            {memories.map((data)=>{
                console.log(data)
                return (
                    <div className="card" key={data._id}>
                    <img width={100} height={100} src={data.memory}/>
                    
                    </div>
                )
            })}
        </>
    )
}


export default Memories