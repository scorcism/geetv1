"use client"

import { useEffect, useState } from "react";
import { FaMeh, FaEye, FaRegHeart } from 'react-icons/fa';
import { useGlobalContext } from '../../Context/memories';


const Memory = ({ params: { memory } }) => {
    let id = memory;
    const URL = `http://localhost:5000/api`;
    // const window = (new JSDOM('')).window
    // const DOMPurify = createDOMPurify(window)
    const { setShowAlert } = useGlobalContext();
    
    const [mem, setMemory] = useState([]);

    const [likes, setLikes] = useState();
    const [dislikes, setDisLikes] = useState();
    const [liked, setLiked] = useState(false);
    const [disliked, setDisLiked] = useState(false);
    const [mid, setID] = useState(0);
    const [views, setViews] = useState();

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
                if (mem) {
                    setLikes(data[0].likes);
                    setDisLikes(data[0].dislikes);
                    setViews(data[0].views);
                    setID(data[0]._id);
                }
            })
    }


    const submitStatRequest = async (id, endpoint, initial_data) => {
        // console.log("Inside submitStatRequest: "+ id + +" " + endpoint + " " + initial_data)
        const requestOptions = {
            method: "POST",
            crossDomain: true,

            headers: {
                "Content-Type": "application/json",
                Access: "application/json",
                "Access-Control-Allow-Origin": "*"
            },

            body: JSON.stringify({
                old: initial_data
            })
        };
        fetch(`${URL}/memory/stats/${endpoint}/${id}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                // setMessage({ message: data.message, status: data.status })
                // console.log(data)
                if (data.for == "like") {
                    setLikes(data.message)
                    setLiked(true);
                } else if (data.for == "dislike") {
                    setDisLikes(data.message)
                    setDisLiked(true);
                } else if (data.for == "view") {
                    setViews(data.message)
                }
            })
    }

    const like = () => {
        // console.log("like click")
        submitStatRequest(mid, "like", likes);
        setShowAlert({
            message: "I Liked It",
            status: 1
        })
    }

    const dislike = () => {
        submitStatRequest(mid, "dislike", dislikes)
        // console.log("dis-like click")
        setShowAlert({
            message: "I Dis-Liked It",
            status: 0
        })
    }


    useEffect(() => {
        getMemory()
    }, [])

    if (mem) {
        console.log(mid);
        console.log(likes + " likes")
        console.log(dislikes + " dislikes")
    }

    return (

        <>
            <div className="mx-4 container flex flex-row grow border-green-100 max-h-screen">
                <div className="left__container border-4 border-red-900 flex items-center justify-center">
                    <img class="w-full max-w-full min-w-full"
                        src={mem.image} />
                </div>
                <div className="right__container border-2 border-white px-3 text-white flex flex-col ">

                    <div className="text-2xl title mt-3">

                        <h2 className="">• {mem.name}</h2>

                    </div>

                    <div className="py-5 desc overflow-y-auto h-full">
                        <p className="text-lg italic tracking-wider  single-desc">
                            {mem.desc}
                        </p>
                        {/* letter-spacing: 0.05em;
    font-style: italic;
    text-decoration: auto;
    text-decoration-line: none; */}
                        <div className=" metadata flex w-[50%] flex-row justify-between items-center text-red-500 my-3">
                            <p>{mem.mood} </p>
                            <p>@{mem.handle}</p>
                        </div>
                        <div className="stats w-[50%]">
                            <div class="my-10">
                                <div class="mb-2">
                                    {/* <div class="flex items-center">
                                        <span class="mr-3 inline-flex items-center cursor-pointer">
                                            <svg class="fill-heart text-gray-700 inline-block h-7 w-7 heart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </span>
                                    </div> */}

                                    <div className="stats flex flex-row justify-between items-center text-xl w-full">
                                        <div className="likes flex flex-row items-center justify-between">
                                            {
                                                liked ?
                                                    <>
                                                        &#128147;<span className='text-sm'>{likes}</span>

                                                    </>
                                                    :
                                                    <>
                                                        <FaRegHeart style={{ cursor: "pointer" }} title='like' className='' onClick={like} /><span className='text-sm'>{likes}</span>
                                                    </>
                                            }
                                        </div>
                                        <div className="dislikes flex flex-row items-center justify-between">

                                            {
                                                disliked ?
                                                    <>
                                                        &#128515;<span className='text-sm'>{dislikes}</span>

                                                    </>
                                                    :
                                                    <>
                                                        <FaMeh style={{ cursor: "pointer" }} title='dislike' onClick={dislike} /><span className='text-sm'>{dislikes}</span>
                                                    </>
                                            }


                                        </div>
                                        <div className="view flex flex-row items-center justify-between">
                                            <FaEye /> <span>{mem.views}</span>
                                        </div>


                                    </div>


                                    {/* <span class="text-white text-sm font-bold">{likes} </span>
                                    <span class="text-white text-sm font-bold">{dislikes} </span> */}
                                </div>
                                <span class="block ml-2 text-xs text-gray-600"><span className="text-gray-300"> Published:</span> {mem.createdAt}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* <div class="absolute bottom-0 left-0 right-0 pl-4">
                        <div class="pt-4">
                            <div class="mb-2">
                                <div class="flex items-center">
                                    <span class="mr-3 inline-flex items-center cursor-pointer">
                                        <svg class="fill-heart text-gray-700 inline-block h-7 w-7 heart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </span>
                                    <span class="mr-3 inline-flex items-center cursor-pointer">
                                        <svg class="text-gray-700 inline-block h-7 w-7 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </span>
                                </div>
                                <span class="text-gray-600 text-sm font-bold">{mem.likes} Likes</span>
                            </div>
                            <span class="block ml-2 text-xs text-gray-600">{mem.createdAt}</span>
                        </div>
                    </div> */}

            {/*  <div class="bg-white overflow-hidden shadow-none mx-6 min-h-min">
            <div class="grid grid-cols-4 max-w-full">

                 <div class="col-span-2 w-full">
                     <img class="w-full max-w-full min-w-full"
                         src={mem.image} />
                 </div>

                <div class="relative">
                    <header class="border-b border-grey-400 ">
                        
                             <p class="">{mem.desc}</p>
                        
                     </header>


                   
                 </div>
             </div>
         </div> */}
        </>
    )

}

export default Memory