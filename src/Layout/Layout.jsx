import { Outlet } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-white w-full h-screen p-6 flex">
                <div className="w-[300px] mr-10">
                    <div className="h-[300]">
                        <img className="w-[300px] h-[300px] border-2 border-gray-100 rounded-full" src="https://i.ibb.co/S6Tz9gN/Saddam-Photo.png" alt="" />
                    </div>

                    <div className="mt-6">
                        <h3 className="text-4xl text-center text-gray-700 font-black">Saddam Hossain</h3>
                        <h4 className="text-xl text-center text-gray-500 font-semibold mt-1">Front-end Web Developer</h4>
                    </div>

                    <div className="divider"></div>

                    <ul className="flex justify-around text-gray-600">
                        <li>About</li>
                        <li>|</li>
                        <li>Projects</li>
                        <li>|</li>
                        <li>Articles</li>
                        <li>|</li>
                        <li>Contact</li>
                    </ul>

                    <nav className="flex text-2xl mt-6 gap-2 justify-center text-gray-600">
                        <a><FaGithubSquare />
                        </a>
                        <a><FaLinkedin />
                        </a>
                        <a><FaSquareTwitter />
                        </a>
                        <a><FaFacebookSquare />
                        </a>
                    </nav>

                    {/* <ul className="menu text-md font-semibold">
                        <li>
                            <NavLink className='hover:bg-slate-100 rounded-r-full' to='/dashboard/manageShop'>
                                Manage Shop
                            </NavLink>
                        </li>
                    </ul> */}

                </div>

                <div className="flex-1 relative">
                    <div className="bg-slate-100 rounded-xl pb-10 h-[calc(100vh-50px)]  shadow-md overflow-hidden">
                        <div className="overflow-hidden">
                            <Outlet></Outlet>
                        </div>

                    </div>

                    {/* <div className="bg-slate-100 rounded-xl pb-10 h-[calc(100vh-50px)]  shadow-md">
                        <Outlet></Outlet>
                    </div> */}

                    {/* <footer className="footer absolute h-12 items-center px-4 rounded-b-xl bg-slate-200 left-0 w-full border-t border-gray-100 text-xs flex justify-between">
                        <div>
                            logo
                        </div>
                        <aside className="items-center">
                            <p>Copyright © 2023 - All right reserved</p>
                        </aside>
                        <nav className="grid-flow-col gap-4 justify-self-end text-purple-600">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </nav>
                    </footer> */}
                </div>
            </div>
        </div>
    );
};

export default Layout;