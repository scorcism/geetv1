"use client"

import Link from 'next/link';
import { useEffect, useState } from "react";
import { useGlobalContext } from '../Context/memories';
import { FaHeart, FaMeh } from 'react-icons/fa';
import MemoryCard from './MemoryCard';


const Memories = () => {

    const { URL, memories } = useGlobalContext();


    return (
        <>
            <div className="grid gap-10 grid-cols-fluid">
                {memories.map((data) => {
                    // console.log(data)
                    // console.log(data.image)
                    return (
                        <MemoryCard data={data}/>
                    )
                })}
            </div>
        </>
    )
}


export default Memories