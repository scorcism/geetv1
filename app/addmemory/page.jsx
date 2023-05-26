"use client"

import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../Context/memories";
import { Editor } from '@tinymce/tinymce-react';

function Imageupload() {
    
    
    const { URL, setShowAlert } = useGlobalContext();
    const editorRef = useRef(null);


    const [image, setImage] = useState();
    const [data, setData] = useState({
        mood: "happy",
        desc: "",
        handle: "anonymous",
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
                message: "Image added",
                status: 1
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

    const sendForm = () => {

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
                // console.log(data)
                // setMessage({ message: data.message, status: data.status })
                if (data.status == 1) {
                    setData({
                        mood: "",
                        desc: "",
                        handle: "",
                        name: "",
                    })
                    setImage(null);
                    setShowAlert({
                        message: "Memory Created", status: 1
                    })
                } else {
                    setData({
                        mood: data.mood,
                        desc: data.desc,
                        handle: "",
                        name: data.handle,
                    })
                    // setImage(null);
                    setShowAlert({
                        message: data.message, status: data.status
                    })
                    // console.log(data)
                }
            })
    }

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    useEffect(() => {
        document.title = "💝 Add Memory | GEET";
    }, [])

    // console.log(data)

    return (
        <div className="">
            <div className="">
                Upload
                {/* <input type="text" onChange={handleOnChange} name="mood" placeholder="mood" value={data.mood} /> */}
                <select onChange={handleOnChange} name="mood" value={data.mood}>
                    <option value="happy">happy</option>
                    <option value="sad">sad</option>
                    <option value="angry">Angry</option>
                </select>
                <textarea type="text" minLength={"50"} onChange={handleOnChange} name="desc" placeholder="desc" value={data.desc} rows="4" cols="50"/>
                {/* <input type="text" onChange={handleOnChange} name="desc" placeholder="desc" value={data.desc} /> */}
                <input type="text" onChange={handleOnChange} name="handle" placeholder="handle" value={data.handle} />
                <input type="text" onChange={handleOnChange} name="name" placeholder="name" value={data.name} />

                <input
                    accept="image/*"
                    type="file"
                    onChange={convertToBase64}
                />
    

            </div>
            

            <div className="grid">
                <img src={image} width={100} height={100} />
            </div>
            <button onClick={()=>{
                console.log(data)  ;
            }}>check data</button>
            <button onClick={() => {
                if ((data.mood == null || data.mood == "")) {
                    setShowAlert({
                        message: "Set Mood of Memory",
                        status: 0
                    })
                }
                else if ((data.desc == null || data.desc == "")) {
                    setShowAlert({
                        message: "Set desc of Memory",
                        status: 0
                    })
                }
                else if (data.desc.length < 50) {
                    setShowAlert({
                        message: "desc length should be > 50",
                        status: 0
                    })
                }
                else if ((data.name == null || data.name == "")) {
                    setShowAlert({
                        message: "Set name of Memory",
                        status: 0
                    })
                } else if (image == null) {
                    setShowAlert({
                        message: "Set Image of Memory",
                        status: 0
                    })
                }
                // else if ((data.mood == null || data.mood == "") && (data.name == null || data.name == "") && (data.desc == null || data.desc == "")){
                //     sendForm();
                // }
                else {
                    sendForm();
                }
            }}>Upload</button>
        </div>


    )
}

export default Imageupload