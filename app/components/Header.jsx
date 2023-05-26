"use client"

import Link from "next/link"


const Header = () => {


    return (
        <>
            {/* <div className="sticky top-0 z-50 border-b-2 border-gray-700 mb-3 bg-gray-800"> */}
            <div className="top-0 z-50 border-b-2 border-gray-700 mb-2 bg-gray-800">
                <div className=" head-body flex items-center h-20 mx-5 justify-between">
                    <Link href="/">
                        <img height={"100px"} width={"100px"} src="/GEET_1.png" alt="logo"
                            className="m-2"
                        />
                    </Link>

                    <div className="menu-items flex flex-row items-center justify-center">
                        <Link href="/addmemory" className="py-2 px-4 bg-gray-500 border-gray-700 border-2 text-xl ml-3 mr-2 uppercase text-black underline font-bold" >Add memories</Link>
                        {/* <form>
                            <div class="lg:w-64 relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                    class="outline-none  h-12 block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search Title..." />
                                <button type="submit"
                                    class="h-9  text-black lg:block sm:hidden absolute right-1 bottom-2 border border-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-2 dark:focus:ring-blue-800">GO</button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header