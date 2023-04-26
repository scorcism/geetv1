"use client"

import { useState } from "react";
import { useGlobalContext } from "../Context/memories";


function Imageupload() {


    const { URL, setShowAlert } = useGlobalContext();



    const [image, setImage] = useState();
    const [data, setData] = useState({
        mood: "",
        desc: "",
        handle: "",
        name: ""
    })
    // const [message, setMessage] = useState({
    //     message: "",
    //     status: 0,
    // })


    const convertToBase64 = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            // console.log(reader.result);
            // console.log(reader.result.length);
            setImage(reader.result);
            setShowAlert({
                message: "Set Image", 
                status: 0
            })
        }
        reader.onerror = () => {
            console.log("Error: ", error);
            // setMessage({
            //     message: error.message,
            //     status: 0
            // })
            setShowAlert({
                message: error.message, 
                status: error.status
            })
        };
    }

    const uploadImage = () => {

        const requestOptions = {
            method: "POST",
            crossDomain: true,

            headers: {
                "Content-Type": "application/json",
                Access: "application/json",
                "Access-Control-Allow-Origin": "*"
            },

            body: JSON.stringify({
                mood: data.mood,
                desc: data.desc,
                handle: data.handle,
                name: data.name,
                image: image
            })
        };
        fetch(`${URL}/addmemory`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // setMessage({ message: data.message, status: data.status })
                setShowAlert({
                    message: data.message, status: data.status
                })
                // console.log(data)
            })
    }

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // console.log(message)

    return (
        <div className="">
            <div className="">
                Upload
                <input type="text" onChange={handleOnChange} name="mood" placeholder="mood" />
                <input type="text" onChange={handleOnChange} name="desc" placeholder="desc" />
                <input type="text" onChange={handleOnChange} name="handle" placeholder="handle" />
                <input type="text" onChange={handleOnChange} name="name" placeholder="name" />

                <input
                    accept="image/*"
                    type="file"
                    onChange={convertToBase64}

                />

            </div>

            <div className="grid">
                <img src={image} width={100} height={100} />
            </div>


            <button onClick={uploadImage}>Upload</button>
        </div>


    )
}

export default Imageupload