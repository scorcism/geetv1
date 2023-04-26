

const Alert = ({ message, status }) => {
    // console.log("Inside alert")
    // console.log(message + " message " + status)
    return (
        <> 
        {
        (message ) &&
            <div className="absolute right-10 bg-white z-50">  
                <div className="">
                    <h3>{message} {status}</h3> 
                    
                </div>
            </div>
        }
        </>
    )
}

export default Alert;