"use client"

import { useState } from "react";
const algo = require('lz-string');


function Imageupload() {

    let URL = `http://localhost:5000/api`

    const [image, setImage] = useState("");

    

    const convertToBase64 = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            console.log(reader.result.length);
            setImage(reader.result);
        }
        reader.onerror = () => {
            console.log("Error: ", error);
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
                base64image: image
            })
        };


        fetch(`${URL}/addmemory`, requestOptions)
            .then((res) => res.json())
            .then((data) => console.log(data))

    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                Upload an image
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