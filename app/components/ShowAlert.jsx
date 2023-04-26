'use client'

import { useState } from "react"
import Alert from "./Alert"
import { useGlobalContext } from "../Context/memories"


const ShowAlert = () => {
    // console.log("LALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")
    // console.log("Inside show alert file")

    const { alert } = useGlobalContext();
    // console.log(alert)

    // console.log("LALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL")

    return (
        <>{
            alert &&
            <div className="">
                <Alert message={alert.message.message} status={alert.message.status} />
            </div>
        }
        </>
    )
}

export default ShowAlert
