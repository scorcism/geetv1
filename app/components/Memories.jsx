"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from "react";
import { resolve } from 'styled-jsx/css';
import { useGlobalContext } from '../Context/memories';

const Memories = () => {


    const { URL, memories } = useGlobalContext();


    return (
        <>
            <div className="grid gap-10 grid-cols-fluid">
                {memories.map((data) => {
                    // console.log(data)
                    let desc = data.desc
                    // console.log(data.image)
                    return (
                        <div className="rounded-md p-4 card bg-gray-500 relative" key={data._id}
                            style={{ minHeight: "min-content" }}
                        >
                            <div className="card-image flex flex-row justify-center items-center">

                                <Link href={`/memories/${data._id}`} target="_blank">

                                    {/* <div className="" 
                                        style={{
                                            backgroundImage:`url(${data.image})`,
                                            maxHeight:"300px",
                                            maxWidth:"300px",
                                        }}
                                    >
                                    </div> */}

                                    <img className='text-transparent '
                                        style={{ maxWidth: "250px", maxHeight: "250px", objectFit: "scale-down" }}
                                        src={data.image}
                                        alt={data.name}
                                    />
                                </Link>
                            </div>
                            <div className=""  >
                                <div className="meta mt-2 flex flex-col">
                                    <div className="name flex flex-row justify-center items-center">
                                        <p className='capitalize'><span></span>{data.name}</p>
                                    </div>

                                    <div className="my-2 metadata flex flex-row justify-between items-center">
                                        <p className='text-white capitalize'><span></span>{data.mood}</p>
                                        <p className='text-white'><span className='text-red-600'>@</span>{data.handle}</p>
                                    </div>
                                    <div className="text-ellipsis desc flex flex-row justify-start items-center">
                                        {desc} ....
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