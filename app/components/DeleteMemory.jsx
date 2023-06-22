import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Input,
} from "@material-tailwind/react";
import { FaRegEyeSlash } from "react-icons/fa";

function DeleteMemory({ id, name, password }) {

    const URL = `http://localhost:5000/api`;

    const [open, setOpen] = useState(false);
    const [pass, setPass] = useState("");
    const [message, setMessage] = useState("");

    const handleOpen = () => setOpen(!open);


    const deleteM = () => {
        if (pass !== password) {
            setMessage("Password is Wrong!!!")
            setPass("");
            setTimeout(() => {
                setMessage("")
            }, 2000);
        } else {
            try {
                const performDelete = () => {

                    const requestOptions = {
                        method: "DELETE",
                        crossDomain: true,

                        headers: {
                            "Content-Type": "application/json",
                            Access: "application/json",
                            "Access-Control-Allow-Origin": "*"
                        },

                        body: JSON.stringify({
                            password: password,
                        })
                    };

                    fetch(`${URL}/deletememory/${id}`, requestOptions)
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.status == 1) {
                                setMessage(data.message);
                                setTimeout(() => {
                                    handleOpen((prev)=>!prev);
                                }, 3000);
                            } else if (data.status == 0) {
                                setMessage(data.message)
                            }
                        })
                }
                performDelete();
            } catch (error) {
                setMessage("Some Error Occured!! Try Later :)")
            }
        }
    }

    return (
        <Fragment >
            <Button onClick={handleOpen} variant="text" size="lg">
                <FaRegEyeSlash  style={{fontSize:"20px"}} />
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{name}</DialogHeader>
                <DialogBody divider>
                    <Typography color="red" className="mt-1 font-normal">
                        Enter Password
                    </Typography>
                    <div className="form mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <Input size="lg" value={pass} onChange={(e) => {
                            setPass(e.target.value)
                        }} />
                        <Typography color="red" className="mt-1 font-normal">
                            {message}
                        </Typography>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="green"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="red"
                        onClick={deleteM}
                        className="mr-1 p-5"
                    >
                        <span style={{ color: "red" }}>Delete</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}
export default DeleteMemory;