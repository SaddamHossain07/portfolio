import { Outlet } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import Typewriter from "react-ts-typewriter";
const Layout = () => {
    return (
        <div className='max-w-7xl mx-auto p-6 flex bg-white'>
            {/* left element  */}
            <div className='w-3/12 overflow-hidden mr-10'>
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-sine"
                    className="fixed top-6 left-6">
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

                    </div>
                </div>
            </div>

            {/* right element  */}
            <div className='w-9/12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;