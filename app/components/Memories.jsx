"use client"

import Link from 'next/link';
import { useEffect, useState } from "react";
import { useGlobalContext } from '../Context/memories';
import { FaHeart, FaMeh } from 'react-icons/fa';
import MemoryCard from './MemoryCard';


const Memories = () => {

    const { URL, memories, setMood, mood, page, setPage, pageCount, setPageCount } = useGlobalContext();

    // console.log(typeof (memories) + " type of memories")
    // console.log(memories)
    console.log(pageCount + " page count");
    function handlePrevious() {
        setPage((p) => {
            if (p === 1) {
                return 1;
            }
            return p - 1;
        })
    }

    function handleNext() {
        setPage((p) => {
            // if(p===pageCount){
            if (p === Math.ceil(pageCount)) {
                return p;
            }
            return p + 1;
        })
    }

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
            <button className='text-sm text-white px-7 hover:bg-blue-700 py-2 border-red bg-blue-800 border-1 rounded-xl font-bold uppercase border-black' style={{ cursor: page == 1 ? "text" : "pointer" }} disabled={page === 1} onClick={handlePrevious}>Previous</button>
            <h2>{page}</h2>
            <button className='text-sm text-white px-7 hover:bg-blue-700 py-2 border-red bg-blue-800 border-1 rounded-xl font-bold uppercase border-black' style={{ cursor: page == pageCount ? "text" : "pointer" }} disabled={page === pageCount} onClick={handleNext}>Next</button>

        </>
    )
}


export default Memories