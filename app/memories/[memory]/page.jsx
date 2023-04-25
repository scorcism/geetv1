"use client"

import { useEffect, useState } from "react";


const Memory = ({ params: { memory } }) => {
    let id = memory;


    let URL = `http://localhost:5000/api`

    const [mem, setMemory] = useState([]);

    const getMemory = async () => {

        const requestOptions = {
            method: "GET",
        };
        // await new Promise((resolve)=>setTimeout(resolve,1000));
        await fetch(`${URL}/getmemory/${id}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data[0].mood)
                setMemory(data[0]);
            })
    }

    useEffect(() => {
        getMemory()
    }, [])

    return (
        <>
            <div className="">
                <div className="bg-gray-700 text-white m_body min-h-screen my-12 border-2 rounded-md border-gray-200 mx-12 py-10 flex flex-row px-4 justify-center items-center">
                    <div className="m_data w-[50%]">
                       <h3 className="text-xl">Author: <span className="text-2xl capitalize">{mem.name} </span></h3>
                       <div className="my-5 flex flex-row 
                       ">
                       <h4 className="text-x">Social: <span className="text-red-700 text-xl">{mem.handle}</span></h4>
                       <h4 className="ml-4 capitalize">Mood:<span className="text-red-700 text-xl capitalize"> {mem.mood} </span></h4>
                       </div>

                       <p className="text-xl "><span></span>{mem.desc}</p>

                    </div>

                    <div className="m_image w-[50%] flex flex-col h-max items-center ">
                        <img src={mem.image} height={"100%"} width={"100%"} style={{border:"1px solid black"}} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Memory