import { Scrollbars } from 'rc-scrollbars';
import { MdCloudDownload } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GoProjectSymlink } from "react-icons/go";

const Skills = () => {
    const handleDownload = () => {
        const pdfPath = '/resume.pdf';
        // Create a temporary anchor element to download the resume
        const a = document.createElement('a');
        a.href = pdfPath;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="skill-bg rounded-xl h-[calc(100vh-50px)] shadow-lg sticky top-6 p-6 lg:p-16 text-slate-300">
            <Scrollbars autoHide
                autoHideTimeout={500}
                autoHideDuration={100}
                thumbSize={30}>
                <div className=''>
                    <h2 className='text-3xl text-center font-black'>What I Know</h2>
                    <h3 className='mt-6 text-justify'>As a versatile front-end developer with a passion for creating seamless and visually stunning user experiences, I bring a robust set of skills to the table. I specialize in leveraging modern frameworks and libraries to elevate my projects.</h3>
                    <div className='mt-6'>
                        <h3 className='text-lg font-semibold'>Front-End Mastery :</h3>
                        <div className='flex flex-col md:flex-row bg-slate-700 rounded-md mt-2'>
                            <div className='p-4 w-full md:w-1/2'>
                                <h3 className='font-semibold'>✨ ReactJS & Next.js:</h3>
                                <p className='text-justify text-xs mt-2'>Bringing dynamic and responsive interfaces to life, I harness the power of ReactJS and Next.js to create scalable web applications with a focus on user engagement.</p>
                            </div>
                            <div className='p-4 w-full md:w-1/2'>
                                <h3 className='font-semibold'>🎨 Tailwind CSS & Bootstrap:</h3>
                                <p className='text-justify text-xs mt-2'>Fluent in the art of styling, I utilize Tailwind CSS and Bootstrap to craft visually appealing, mobile-friendly designs that adhere to the latest industry trends.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-lg font-semibold'>Server-Side Wizardry :</h3>
                        <div className='flex flex-col md:flex-row bg-slate-700 rounded-md mt-2'>
                            <div className='p-4 w-full md:w-1/2'>
                                <h3 className='font-semibold'>🚀 Node.js & Express.js:</h3>
                                <p className='text-justify text-xs mt-2'>On the server side, I harness the efficiency of Node.js and the simplicity of Express.js to build robust and high-performance back-end systems.</p>
                            </div>
                            <div className='p-4 w-full md:w-1/2'>
                                <h3 className='font-semibold'>🔍 MongoDB:</h3>
                                <p className='text-justify text-xs mt-2'>Proficient in NoSQL database management, I leverage MongoDB to store and retrieve data seamlessly, ensuring the scalability and flexibility of my applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-lg font-semibold'>Others Proficiency :</h3>
                        <div className='flex flex-col md:flex-row gap-4 bg-slate-700 rounded-md mt-2'>
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

                        <button onClick={handleDownload} className='btn btn-sm bg-purple-400 text-indigo-950 hover:text-slate-200 btn-ghost rounded-md'><MdCloudDownload />Resume</button>

                        <Link to="/projects">
                            <button onClick={handleDownload} className='btn btn-sm bg-purple-400 text-indigo-950 hover:text-slate-200 btn-ghost rounded-md'><GoProjectSymlink />My Work</button>
                        </Link>

                    </div>
                </div>
            </Scrollbars>

        </div>
    );
};

export default Skills;