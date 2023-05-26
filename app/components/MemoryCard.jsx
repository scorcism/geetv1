"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMeh, FaEye, FaRegHeart } from 'react-icons/fa';
import { useGlobalContext } from '../Context/memories';


const MemoryCard = ({ data }) => {
    // console.log(data)
    let desc = data.desc

    const [likes, setLikes] = useState(data.likes);
    const [dislikes, setDisLikes] = useState(data.dislikes);
    const [liked, setLiked] = useState(false);
    const [disliked, setDisLiked] = useState(false);
    const [views, setViews] = useState(data.views);

    let { URL, setShowAlert } = useGlobalContext();



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
        submitStatRequest(data._id, "like", likes);
        setShowAlert({
            message: "I Liked It",
            status: 1
        })
    }

    const dislike = () => {
        submitStatRequest(data._id, "dislike", dislikes)
        // console.log("dis-like click")
        setShowAlert({
            message: "I Dis-Liked It",
            status: 0
        })
    }

    useEffect(() => {

    }, [])


    return (
        <div className="rounded-md p-4 card bg-gray-500 relative" key={data._id}
            style={{ minHeight: "min-content" }}
        >
            <div className="card-image flex flex-row justify-center items-center">

                <Link href={`/memories/${data._id}`} onClick={() => submitStatRequest(data._id, "view", views)}>

                    <img className='text-transparent '
                        style={{ maxWidth: "250px", maxHeight: "250px", objectFit: "scale-down" }}
                        src={data.image}
                        alt={data.name}
                        width={"200px"}
                        height={"200px"}
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
                    <div className="text-ellipsis desc flex flex-row justify-start items-center desc_wrap">
                        {desc} ....
                    </div>
                    {/* <div className="text-ellipsis desc flex flex-row justify-start items-center">
                        {desc} ....
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
                            <FaEye /> <span>{data.views}</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemoryCard

