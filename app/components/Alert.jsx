

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
            <div style={{
              border:"1px solid black"  
            }} className={`fixed right-10 z-50 lg:w-[300px] rounded-md border-black py-4 px-8  sm:w-40 ${color}`}>  
                <div className="break-normal  bold">
                    <h3 className="text-20"> <span>{status_message} </span>{message}</h3> 
                </div>
            </div>
        }
        </>
    )
}

export default Alert;