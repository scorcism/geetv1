"use client"

import Link from "next/link"


const Header = () => {


    return (
        <>
            <div className="sticky top-0 z-50 border-b-2 border-gray-700 mb-3 bg-gray-800">
                <div className=" head-body flex items-center h-28 mx-5 justify-between mb-3">
                    <Link href="/">
                    <img height={"140px"} width={"140px"} src="/GEET_1.png" alt="logo" 
                        className="m-2"
                    />
                    </Link>

                    <div className="menu-items">
                        <Link href="/addmemory" className="py-2 px-4 bg-gray-500 border-gray-700 border-2 text-xl ml-3 mr-2 uppercase text-black underline font-bold" >Add memories</Link>
                        {/* <Link href="#" className="text-xl ml-3 mr-2 uppercase text-black underline font-bold" >code</Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header