

const Alert = ({ message, status }) => {
    // message = "Liked!!"
    // status = 1;
    // console.log("Inside alert")
    // console.log(message + " message " + status)
    let color = "";
    let status_message = "";
    if(status == 0){
        color = "bg-red-500"
        status_message = "👀"
    }else if (status == 1){
        color =  "bg-blue-200"
        status_message  = "🍎"
    }


    return (
        <> 
        {
        (message ) &&
            <div className={`fixed block transition ease-in-out delay-150 right-10 z-50 lg:w-[300px] border-b-5 border-black min-h-[50px] sm:w-40 ${color}`}>  
                <div className="break-normal bold flex justify-start px-5 py-3 items-start flex-row">
                    <h3 className="text-2xl"> <span>{status_message} </span>{message}</h3> 
                </div>
            </div>
        }
        </>
    )
}

export default Alert;