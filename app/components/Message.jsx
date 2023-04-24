

const Message = ({ message, status }) => {
    return (
        <>
            <div className="absolute top-10 right-10">  
                <div className="">
                    <h3>{message} {status}</h3>
                </div>
            </div>
        </>
    )
}

export default Message;