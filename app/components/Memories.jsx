"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from "react";
import { resolve } from 'styled-jsx/css';

const Memories = () => {

    let URL = `http://localhost:5000/api`

    const [memories, setMemories] = useState([]);

    const getMemories =async  () => {

        const requestOptions = {
            method: "GET",
        };

        // await new Promise((resolve)=>setTimeout(resolve,1000));

        await fetch(`${URL}/getmemories`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setMemories(data);
            })
    }
    useEffect(() => {
        getMemories()
    }, [])


    return (
        <>
            <div className="grid gap-10 grid-cols-fluid">
                {memories.map((data) => {
                    // console.log(data)
                    let desc = data.desc
                    return (
                        <div className="rounded-md p-4 min-h-[300px]  card bg-gray-500 relative" key={data._id}
                            style={{ minHeight: "min-content" }}
                        >
                            <div className="card-image flex flex-row justify-center items-center">

                                <Link href={`/memories/${data._id}`} target="_blank">
                                    <img className='text-transparent '
                                        style={{ maxWidth: "250px", maxHeight: "250px", objectFit: "scale-down" }}
                                        src={data.image}
                                        alt={data.name}
                                    />
                                </Link>
                            </div>
                            <div className="" >
                                <div className="meta mt-2 flex flex-col">
                                    <div className="name flex flex-row justify-center items-center">
                                        <p className='capitalize'><span></span>{data.name}</p>
                                    </div>

                                    <div className="my-2 metadata flex flex-row justify-between items-center">
                                        <p className='text-white capitalize'><span></span>{data.mood}</p>
                                        <p className='text-white'><span className='text-red-600'>@</span>{data.handle}</p>
                                    </div>
                                    <div className="desc flex flex-row justify-center items-center">
                                        {desc} ... .
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default Memories