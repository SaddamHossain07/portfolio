import './Home.css'
import { Scrollbars } from 'rc-scrollbars';
import Typewriter from 'react-ts-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdCloudDownload } from "react-icons/md";
import { FaAnglesDown } from 'react-icons/fa6';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
AOS.init();

const Home = () => {
    const handleDownload = () => {
        const pdfPath = '../../../../public/resume_of_saddam.pdf';
        // Create a temporary anchor element to download the resume
        const a = document.createElement('a');
        a.href = pdfPath;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <>
            {/* welcome section  */}
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="home-bg rounded-xl pb-10 h-[calc(100vh-50px)] shadow-lg overflow-hidden sticky top-6 p-32 text-slate-300">
                <div className='mt-6'>
                    <h2 className='text-3xl font-black'>Welcome to my corner of the web!</h2>
                    <h3 className='mt-6 text-justify'><Typewriter text="I'm a front-end web developer based in Bangladesh, passionate about cutting-edge, pixel-perfect, beautiful and user-friendly interfaces, driven by a love for turning ideas into interactive and engaging websites. I believe in the power of great design to enhance the user experience. Feel free to explore my projects below and get a glimpse of my coding journey." /></h3>
                </div>
                <div className='mt-10 flex flex-col items-center'>
                    <FaAnglesDown className='text-center text-2xl mt-2' />
                </div>
            </div>

            {/* skill section  */}
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="skill-bg rounded-xl mt-24 pb-10 h-[calc(100vh-50px)] shadow-lg sticky top-6 p-16 text-slate-300">
                <Scrollbars autoHide
                    autoHideTimeout={500}
                    autoHideDuration={100}
                    thumbSize={30}>
                    <div className=''>
                        <h2 className='text-3xl text-center font-black'>What I Know</h2>
                        <h3 className='mt-6 text-justify'>As a versatile front-end developer with a passion for creating seamless and visually stunning user experiences, I bring a robust set of skills to the table. I specialize in leveraging modern frameworks and libraries to elevate my projects.</h3>
                        <div className='mt-6'>
                            <h3 className='text-lg font-semibold'>Front-End Mastery :</h3>
                            <div className='flex bg-slate-700 rounded-md mt-2'>
                                <div className='p-4 w-1/2'>
                                    <h3 className='font-semibold'>✨ ReactJS & Next.js:</h3>
                                    <p className='text-justify text-xs mt-2'>Bringing dynamic and responsive interfaces to life, I harness the power of ReactJS and Next.js to create scalable web applications with a focus on user engagement.</p>
                                </div>
                                <div className='p-4 w-1/2'>
                                    <h3 className='font-semibold'>🎨 Tailwind CSS & Bootstrap:</h3>
                                    <p className='text-justify text-xs mt-2'>Fluent in the art of styling, I utilize Tailwind CSS and Bootstrap to craft visually appealing, mobile-friendly designs that adhere to the latest industry trends.</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-lg font-semibold'>Server-Side Wizardry :</h3>
                            <div className='flex bg-slate-700 rounded-md mt-2'>
                                <div className='p-4 w-1/2'>
                                    <h3 className='font-semibold'>🚀 Node.js & Express.js:</h3>
                                    <p className='text-justify text-xs mt-2'>On the server side, I harness the efficiency of Node.js and the simplicity of Express.js to build robust and high-performance back-end systems.</p>
                                </div>
                                <div className='p-4 w-1/2'>
                                    <h3 className='font-semibold'>🔍 MongoDB:</h3>
                                    <p className='text-justify text-xs mt-2'>Proficient in NoSQL database management, I leverage MongoDB to store and retrieve data seamlessly, ensuring the scalability and flexibility of my applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-lg font-semibold'>Others Proficiency :</h3>
                            <div className='flex gap-4 bg-slate-700 rounded-md mt-2'>
                                <div className='p-4'>
                                    <h3 className='font-semibold'>🔐 Firebase Authentication:</h3>
                                    <p className='text-justify text-xs mt-2'>Ensuring the security of user interactions, I implement Firebase Authentication to streamline user access and authorization, delivering a seamless and secure login experience.</p>
                                </div>
                                <div className='p-4'>
                                    <h3 className='font-semibold'>🌐 Full-Stack Development:</h3>
                                    <p className='text-justify text-xs mt-2'>Bridging the gap between front-end and back-end, I bring a full-stack approach to my projects, ensuring cohesive and integrated solutions from end to end.</p>
                                </div>
                                <div className='p-4'>
                                    <h3 className='font-semibold'>💡 Innovative Problem Solver:</h3>
                                    <p className='text-justify text-xs mt-2'>Fueled by a passion for overcoming challenges, I thrive in dynamic environments, continuously exploring new technologies and methodologies to deliver cutting-edge solutions.</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <h3>Explore my portfolio to witness the fusion of creativity, functionality, and technical prowess in action. Let's transform ideas into immersive digital experiences!</h3>
                        </div>
                        <div className='mt-6 mb-2 flex justify-center gap-6'>
                            <button onClick={handleDownload} className='bg-purple-300 text-gray-800 font-semibold uppercase flex gap-2 items-center rounded-md px-4 py-2 hover:cursor-pointer'>
                                <MdCloudDownload />
                                Resume</button>
                            <Link to="/project">
                                <div className='bg-purple-300 text-gray-800 font-semibold uppercase rounded-md px-8 py-2'>Portfolio</div>
                            </Link>

                        </div>
                    </div>
                </Scrollbars>

            </div>

            {/* contact section  */}
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="project-bg rounded-xl pb-10 h-[calc(100vh-50px)] shadow-lg overflow-hidden sticky top-6 px-24 py-16 text-slate-300">
                <div className=''>
                    <h2 className='text-3xl text-center font-black'>Reach Me Out</h2>
                    <h3 className='mt-6 text-justify'>Thank you for exploring my portfolio! I'm eager to hear from you and discuss how we can collaborate or explore exciting opportunities together. Feel free to drop me a message, whether it's about a potential project, partnership, or just a friendly conversation. I look forward to connecting with you! Please don't hesitate to reach out through any of the following channels:</h3>
                </div>
                <div className='mt-10 flex gap-2'>
                    <div className='w-1/2 space-y-4'>
                        <div className='flex gap-4 items-center'>
                            <IoCall className='text-purple-400 text-3xl' />
                            <div>
                                <h3 className='font-semibold'>Call Me</h3>
                                <h3 className='text-sm'>+880 1753 28807</h3>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <MdEmail className='text-purple-400 text-3xl' />
                            <div>
                                <h3 className='font-semibold'>Email</h3>
                                <h3 className='text-sm'>contact.saddam3@gmail.com</h3>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FaMapMarkerAlt className='text-purple-400 text-3xl' />
                            <div>
                                <h3 className='font-semibold'>Address</h3>
                                <h3 className='text-sm'>Panchagarh - 5000, Rangpur, Bangladesh</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 bg-gray-500 bg-opacity-30 rounded'>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;