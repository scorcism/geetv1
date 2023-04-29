"use client"

import Link from 'next/link';
import { useEffect, useState } from "react";
import { useGlobalContext } from '../Context/memories';
import { FaHeart, FaMeh } from 'react-icons/fa';
import MemoryCard from './MemoryCard';


const Memories = () => {

    const { URL, memories, setMood, mood } = useGlobalContext();

    // console.log(typeof (memories) + " type of memories")
    console.log(memories)

    

    return (
        <>
            <div className=" text-white flex flex-row justify-between text-2xl">
                choose one
                <div className="">
                    <ul className='flex flex-row justify-around gap-10'>
                        <li onClick={() => {
                            setMood("happy");
                        }} >Happy</li>
                        <li onClick={() => {
                            setMood("sad");
                        }} >sad</li>
                        <li onClick={() => {
                            setMood("anger");
                        }} >Anger</li>
                    </ul>
                </div>
            </div>
            <div className="grid gap-10 grid-cols-fluid">
                {memories.map((data) => {
                    // console.log(data)
                    // console.log(data.image)
                    return (
                        <MemoryCard data={data} />
                    )
                })}
            </div>
        </>
    )
}


export default Memories