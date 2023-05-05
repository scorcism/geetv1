"use client"

import { Suspense, useEffect, useState } from "react";
// import createDOMPurify from 'dompurify'
// import { JSDOM } from 'jsdom'


const Memory = ({ params: { memory } }) => {
    let id = memory;
    // const window = (new JSDOM('')).window
    // const DOMPurify = createDOMPurify(window)


    let URL = `http://localhost:5000/api`

    const [mem, setMemory] = useState([]);

    const getMemory = async () => {

        const requestOptions = {
            method: "GET",
        };
        // await new Promise((resolve)=>setTimeout(resolve,1000));
        await fetch(`${URL}/getmemory/${id}`, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data[0].mood)
                setMemory(data[0]);
            })
    }

    useEffect(() => {
        getMemory()
    }, [])

    return (
        <>
            <aside id="logo-sidebar"
                class="fixed top-0 left-0 z-40 w-[350px] h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-black dark:border-black"
                aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-[#0d1117]">
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-5 h-5 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="text-black dark:text-white">yogesh-hack🔻</h3>
                    </div>
                    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div class="flex justify-between items-center">
                        <p class="text-black dark:text-white ">Top Repository</p>
                        <button type="submit"
                            class="text-white bg-[#238636] hover:bg-[#2c9b41] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-4 py-1 text-center">New</button>
                    </div>
                    <div class="p-3">
                        <input type="text"
                            class="bg-black border dark:border-gray-600 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-64 p-1 mx-auto dark:focus:border-white"
                            placeholder="Find a repository..." />
                    </div>

                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/yogesh-hack</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/Frontend-Development-2023</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/python_DSA</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/MERN-javascript</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/Java-Competetive-Question</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/Web-design</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/weather-news-web-app</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/weather-news-web-app</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/CPP_programming</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/CPP_programming</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/CPP_programming</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/CPP_programming</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/CPP_programming</h3>
                    </div>
                    <div class="flex items-center gap-3 p-2">
                        <img class="w-3 h-3 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo" />
                        <h3 class="hover:underline hover:cursor-pointer text-black text-sm dark:text-white">
                            yogesh-hack/CPP_programming</h3>
                    </div>
                    <a href="" class="text-gray-400 hover:text-blue-400 text-[12px]">Show More</a>
                </div>

            </aside>


            <div class="grid grid-cols-2 p-4 justify-between mt-8 md:ml-[350px] dark:bg-black">

                <div class="p-4 sm:w-96 lg:w-[32rem] mt-14">
                    <ul class="flex items-center gap-5 text-white">
                        <li class="hover:bg-gray-800 hover:cursor-pointer p-1 rounded border-my-2 border-b-2 border-red-400">
                            Following</li>
                        <li class="hover:bg-gray-800 hover:cursor-pointer p-1 rounded ">For you</li>
                    </ul>
                    <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">

                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img data-popover-target="popover-user-profile" class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                <div data-popover id="popover-user-profile" role="tooltip" onclick="myFunction()"
                                    class="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                                    <div class="p-3">
                                        <div class="flex items-center justify-between mb-2">
                                            <a href="#">
                                                <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg"
                                                    alt="Jese Leos">
                                            </a>
                                            <div>
                                                <button type="button"
                                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
                                            </div>
                                        </div>
                                        <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
                                            <a href="#">vikaskumarsingh20</a>
                                        </p>
                                        <p class="mb-3 text-sm font-normal">
                                            <a href="#" class="hover:underline">@VikasKumarSingh</a>
                                        </p>
                                        <p class="mb-4 text-sm font-light">Open-source contributor. Building <a href="#"
                                            class="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
                                        <ul class="flex text-sm font-light">
                                            <li class="mr-2">
                                                <a href="#" class="hover:underline">
                                                    <span class="font-semibold text-gray-900 dark:text-white">799</span>
                                                    <span>Following</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="hover:underline">
                                                    <span class="font-semibold text-gray-900 dark:text-white">3,758</span>
                                                    <span>Followers</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div data-popper-arrow></div>
                                </div>
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
                            </div>
                            <div class="p-4 rounded border border-gray-700 bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l hover:border-b hover:border-blue-400-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">This is sudoku solver project, written wholly in C++, which solve,
                                    validate and Sudoku Puzzles!</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">🔴 C++</p>
                                    <a href="#" class="text-sm text-gray-400">⭐ 2</a>
                                    <p class="text-sm text-gray-400">Updated Feb 9</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/117354199?s=120&v=4" alt="user photo" />
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">shivkumar-hack</a> started following you · 3 months ago</h3>
                            </div>
                            <div class="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">shiv kumar singh
                                        <span class="text-gray-400 font-normal text-sm">shivkumar-hack</span></a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">i am shiv kumar pursuing in b-tech with computer science and
                                    engineering.</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">3 Repository</p>
                                    <p class="text-sm text-gray-400">1 Follower</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
                            </div>
                            <div class="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">This is sudoku solver project, written wholly in C++, which solve,
                                    validate and Sudoku Puzzles!</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">🔴 C++</p>
                                    <a href="#" class="text-sm text-gray-400">⭐ 2</a>
                                    <p class="text-sm text-gray-400">Updated Feb 9</p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
                            </div>
                            <div class="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">This is sudoku solver project, written wholly in C++, which solve,
                                    validate and Sudoku Puzzles!</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">🔴 C++</p>
                                    <a href="#" class="text-sm text-gray-400">⭐ 2</a>
                                    <p class="text-sm text-gray-400">Updated Feb 9</p>
                                </div>
                            </div>

                        </div>
                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
                            </div>
                            <div class="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">This is sudoku solver project, written wholly in C++, which solve,
                                    validate and Sudoku Puzzles!</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">🔴 C++</p>
                                    <a href="#" class="text-sm text-gray-400">⭐ 2</a>
                                    <p class="text-sm text-gray-400">Updated Feb 9</p>
                                </div>
                            </div>

                        </div>
                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
                            </div>
                            <div class="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">This is sudoku solver project, written wholly in C++, which solve,
                                    validate and Sudoku Puzzles!</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">🔴 C++</p>
                                    <a href="#" class="text-sm text-gray-400">⭐ 2</a>
                                    <p class="text-sm text-gray-400">Updated Feb 9</p>
                                </div>
                            </div>

                        </div>
                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
                            </div>
                            <div class="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">This is sudoku solver project, written wholly in C++, which solve,
                                    validate and Sudoku Puzzles!</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">🔴 C++</p>
                                    <a href="#" class="text-sm text-gray-400">⭐ 2</a>
                                    <p class="text-sm text-gray-400">Updated Feb 9</p>
                                </div>
                            </div>

                        </div>
                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
                            </div>
                            <div class="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">This is sudoku solver project, written wholly in C++, which solve,
                                    validate and Sudoku Puzzles!</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">🔴 C++</p>
                                    <a href="#" class="text-sm text-gray-400">⭐ 2</a>
                                    <p class="text-sm text-gray-400">Updated Feb 9</p>
                                </div>
                            </div>

                        </div>
                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
                            </div>
                            <div class="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">This is sudoku solver project, written wholly in C++, which solve,
                                    validate and Sudoku Puzzles!</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">🔴 C++</p>
                                    <a href="#" class="text-sm text-gray-400">⭐ 2</a>
                                    <p class="text-sm text-gray-400">Updated Feb 9</p>
                                </div>
                            </div>

                        </div>
                        <div class="sm:w-96 lg:w-[32rem] mt-5">
                            <div class="flex items-center gap-3 p-2">
                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                <h3 class="text-black text-sm dark:text-gray-400"><a class="text-white hover:text-blue-400"
                                    href="">vikaskumarsingh20</a> starred 4 repositories · last month</h3>
                            </div>
                            <div class="p-4 rounded bg-gray-50 h-auto dark:bg-[#0d1117]">
                                <div class="flex justify-between items-center">
                                    <a class="text-white font-bold hover:text-blue-400" href="#">vikaskumarsingh20/Sudoku-Solver</a>
                                    <div class="flex">
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-l-lg">⭐Star</button>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-r-lg">🔻</button>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-400">This is sudoku solver project, written wholly in C++, which solve,
                                    validate and Sudoku Puzzles!</p>
                                <div class="mt-3 flex items-center gap-5">
                                    <p class="text-sm text-gray-400">🔴 C++</p>
                                    <a href="#" class="text-sm text-gray-400">⭐ 2</a>
                                    <p class="text-sm text-gray-400">Updated Feb 9</p>
                                </div>
                            </div>

                        </div>

                        <footer class="sm:w-96 lg:w-[32rem] mt-10">
                            <div class="flex items-center gap-1">
                                <svg class="w-3 h-3 bg-white rounded-full" aria-hidden="true" height="16" viewBox="0 0 16 16"
                                    version="1.1" width="16" data-view-component="true"
                                    class="octicon octicon-light-bulb color-fg-muted">
                                    <path fill-rule="evenodd"
                                        d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z">
                                    </path>
                                </svg>
                                <p class="text-white text-[12px] text-gray-400">ProTip! The feed shows you events from people you
                                    follow
                                    and
                                    repositories you watch or star.</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <svg class="w-3 h-3 bg-white rounded-full" aria-hidden="true" height="16" viewBox="0 0 16 16"
                                    version="1.1" width="16" data-view-component="true" class="octicon octicon-rss mr-1">
                                    <path fill-rule="evenodd"
                                        d="M2.002 2.725a.75.75 0 01.797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 11-1.497.098 10.502 10.502 0 00-9.776-9.776.75.75 0 01-.7-.798zM2 13a1 1 0 112 0 1 1 0 01-2 0zm.84-5.95a.75.75 0 00-.179 1.489c2.509.3 4.5 2.291 4.8 4.8a.75.75 0 101.49-.178A7.003 7.003 0 002.838 7.05z">
                                    </path>
                                </svg>
                                <a href="#" class="text-white text-[12px] text-gray-400 hover:text-blue-400">Subscribe to your news
                                    feed</a>
                            </div>
                        </footer>

                        <div class="mt-10 grid justify-between grid-cols-3">
                            <ul class="text-gray-400 text-[12px] flex flex-col">
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400"> Blog</a>
                                </li>
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400"> About</a>
                                </li>
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400"> Shop</a>
                                </li>
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400"> Contact
                                    Github</a></li>
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400">
                                    Pricing</a>
                                </li>
                            </ul>
                            <ul class="text-gray-400 text-[12px] flex flex-col">
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400"> API</a>
                                </li>
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400">
                                    Training</a>
                                </li>
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400">
                                    Status</a>
                                </li>
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400">
                                    Security</a>
                                </li>
                            </ul>
                            <ul class="text-gray-400 text-[12px] flex flex-col">
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400"> Terms</a>
                                </li>
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400">
                                    Privacy</a>
                                </li>
                                <li class=""><a href="#" class="hover:text-blue-400 hover:border-b hover:border-blue-400"> Docs</a>
                                </li>
                            </ul>
                        </div>
                </div>

                <div class="ml-32">
                    <h2 class="text-white text-sm font-bold mt-14 p-4">Latest Changes</h2>

                    <ol class="relative border-l border-gray-200 dark:border-gray-700">
                        <li class="mb-10 ml-4">
                            <div
                                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                            </div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">11 hours
                                ago</time>
                            <p><a href="#"
                                class="mb-4 text-sm font-normal text-gray-500 hover:text-blue-400 hover:underline dark:text-gray-300">Secret
                                scanning changes coming to how you opt-in to alert notifications.</a></p>
                        </li>
                        <li class="mb-10 ml-4">
                            <div
                                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                            </div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">16 hours
                                ago</time>
                            <p><a href="#"
                                class="mb-4 text-sm font-normal text-gray-500 hover:text-blue-400 hover:underline dark:text-gray-300">GitHub
                                Desktop 3.2 – Preview your Pull Request.</a></p>
                        </li>
                        <li class="mb-10 ml-4">
                            <div
                                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                            </div>
                            <time
                                class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">yesterday</time>
                            <p><a href="#"
                                class="mb-4 text-sm font-normal text-gray-500 hover:text-blue-400 hover:underline dark:text-gray-300">SMS
                                and TOTP can now both be registered 2FA methods.</a>
                                <p>
                                </li>
                                <p><a href=""
                                    class="pl-5 text-sm font-normal text-gray-500 hover:text-blue-400 hover:underline dark:text-gray-300">View
                                    changelogs ➡️</a></p>
                    </ol>

                            <div class="mt-5">
                                <h2 class="text-white text-sm font-bold">Explore Repositories</h2>
                                <div class="mt-5">
                                    <div class="p-4 rounded bg-gray-50 h-auto dark:bg-transparent">
                                        <div class="flex justify-between items-center">
                                            <div class="flex gap-2">
                                                <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                                    src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                                <a class="text-white font-bold sm:text-[12px] lg:text-sm hover:underline"
                                                    href="#">shubh73 / devfolio</a>
                                            </div>
                                            <button
                                                class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-lg">⭐</button>
                                        </div>
                                        <p class="sm:text-[12px] lg:text-sm text-gray-400"> An eye-catching developer Portfolio, Built
                                            on NextJS, GSAP,
                                            Tailwind and React</p>
                                        <div class="mt-3 flex items-center gap-10">
                                            <a href="#" class="text-sm text-gray-400">⭐ 72</a>
                                            <p class="text-sm text-gray-400">🟡 Javascript</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />

                            <div class="mt-5">
                                <div class="p-4 rounded bg-gray-50 h-auto dark:bg-transparent">
                                    <div class="flex justify-between items-center">
                                        <div class="flex gap-2">
                                            <img class="w-8 h-8 rounded-full hover:cursor-pointer"
                                                src="https://avatars.githubusercontent.com/u/92667215?s=120&v=4" alt="user photo" />
                                            <a class="text-white font-bold sm:text-[12px] lg:text-sm hover:underline" href="#">shubh73 /
                                                devfolio</a>
                                        </div>
                                        <button
                                            class="hover:border-white text-white bg-[#21262d] p-1 border border-gray-600 rounded-lg">⭐</button>
                                    </div>
                                    <p class="sm:text-[12px] lg:text-sm text-gray-400"> An eye-catching developer Portfolio, Built on
                                        NextJS, GSAP, Tailwind
                                        and React</p>
                                    <div class="mt-3 flex items-center gap-10">
                                        <a href="#" class="text-sm text-gray-400">⭐ 72</a>
                                        <p class="text-sm text-gray-400">🟡 Javascript</p>
                                    </div>
                                </div>
                            </div>
                            <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />


                        </div>
                    </div>
                </div>
















                {/* <div className="">
                <div className="bg-gray-700 text-white m_body min-h-screen my-12 border-2 rounded-md border-gray-200 mx-12 py-10 flex flex-row px-4 justify-center items-center">
                    <div className="m_data w-[50%]">
                        <h3 className="text-xl">Author: <span className="text-2xl capitalize">{mem.name} </span></h3>
                        <div className="my-5 flex flex-row 
                       ">
                            <h4 className="text-x">Social: <span className="text-red-700 text-xl">{mem.handle}</span></h4>
                            <h4 className="ml-4 capitalize">Mood:<span className="text-red-700 text-xl capitalize"> {mem.mood} </span></h4>
                        </div>


                        <p className="text-xl "><span></span>{mem.desc}</p>

                    </div>

                    <div className="m_image w-[50%] flex flex-col h-max items-center ">
                        <img src={mem.image} height={"100%"} width={"100%"} style={{ border: "1px solid black" }} alt="" />
                    </div>
                </div>
            </div> */}
            </>
            )
}

            export default Memory