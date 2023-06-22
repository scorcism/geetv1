"use client"

// import Link from 'next/link';
import { useEffect, useState } from "react";
import { useGlobalContext } from '../Context/memories';
import { FaHeart, FaMeh } from 'react-icons/fa';
import MemoryCard from './MemoryCard';
import LoadingBar from 'react-top-loading-bar'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';


const Memories = () => {

    const { memories, setMood, mood, page, setPage, pageCount, setPageCount, progress, setProgress } = useGlobalContext();

    // console.log(typeof (memories) + " type of memories")
    // console.log(memories)
    // console.log(pageCount + " page count");
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

    const handleProgress = (value) => {
        setProgress(value);
    }

    const fetchData = () => {
        // let p = page;
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
            <div className="sticky top-0 z-50">
                <LoadingBar
                    color='red'
                    progress={progress}
                    height={3}
                    waitingTime={1000}
                    onLoaderFinished={() => { setProgress(0) }}
                />
            </div>

            {/* <div className=" text-white flex flex-row justify-between text-2xl">
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
            </div> */}
            <InfiniteScroll
                dataLength={memories.length} //This is important field to render the next data
                next={fetchData}
                hasMore={page !== pageCount}
                loader={<Loader />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        {/* <b>Yay! You have seen it all</b> */}
                    </p>
                }
            >
                <div className="grid gap-10 grid-cols-fluid">
                    {memories.map((data) => {

                        return (
                            <MemoryCard data={data} />
                            
                        )

                    })}
                </div>
            </InfiniteScroll >

            {/* <button className='text-sm text-white px-7 hover:bg-blue-700 py-2 border-red bg-blue-800 border-1 rounded-xl font-bold uppercase border-black' style={{ cursor: page == 1 ? "text" : "pointer" }} disabled={page === 1} onClick={handlePrevious}>Previous</button>
            <h2>{page}</h2>
            <button className='text-sm text-white px-7 hover:bg-blue-700 py-2 border-red bg-blue-800 border-1 rounded-xl font-bold uppercase border-black' style={{ cursor: page == pageCount ? "text" : "pointer" }} disabled={page === pageCount} onClick={handleNext}>Next</button> */}

        </>
    )
}


export default Memories