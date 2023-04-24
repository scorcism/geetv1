import Link from "next/link"

const Footer = () => {
    return (
        <>
            <div className=" border-gray-700 head-body flex items-center h-20 justify-center ">
                <Link href="/">
                    <img height={"80px"} width={"80px"} src="/GEET_1.png" alt="logo"
                        className=""
                    />
                </Link>
            </div>
        </>
    )
}

export default Footer