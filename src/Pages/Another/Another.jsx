import { Outlet } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Typewriter from "react-ts-typewriter";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
// ..
AOS.init();

const Another = () => {
    return (
        <div className='max-w-7xl mx-auto p-6 flex bg-white'>
            {/* left element  */}
            <div className='w-3/12 overflow-hidden mr-10'>
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay="500"
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
                {/* welcome section  */}
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="home-bg rounded-xl pb-10 h-[calc(100vh-50px)] shadow-md overflow-hidden sticky top-6 p-32">
                    <div className='mt-12'>
                        <h2 className='text-3xl font-black'>Welcome to my corner of the web!</h2>
                        <h3 className='mt-6 text-justify'><Typewriter text="I'm a front-end web developer based in Bangladesh, passionate about cutting-edge, pixel-perfect, beautiful and user-friendly interfaces, driven by a love for turning ideas into interactive and engaging websites. I believe in the power of great design to enhance the user experience. Feel free to explore my projects below and get a glimpse of my coding journey." /></h3>
                    </div>
                </div>

                {/* skill section  */}
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="skill-bg rounded-xl pb-10 h-[calc(100vh-50px)] shadow-md overflow-hidden sticky top-6 p-32">
                    <div className='mt-12'>
                        <h2 className='text-3xl font-black'>Welcome to my corner of the web!</h2>
                        <h3 className='mt-6 text-justify'><Typewriter text="I'm a front-end web developer based in Bangladesh, passionate about cutting-edge, pixel-perfect, beautiful and user-friendly interfaces, driven by a love for turning ideas into interactive and engaging websites. I believe in the power of great design to enhance the user experience. Feel free to explore my projects below and get a glimpse of my coding journey." /></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Another;