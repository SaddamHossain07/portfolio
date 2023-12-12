import { FaAnglesDown } from 'react-icons/fa6';
import Typewriter from 'react-ts-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="home-bg rounded-xl h-[calc(100vh-50px)] shadow-lg overflow-hidden sticky top-6 p-6 md:p-16 lg:p-32 text-slate-300">
            <div className='mt-4 lg:mt-6'>
                <h2 className='text-3xl font-black'>Welcome to my corner of the web!</h2>
                <h3 className='mt-4 lg:mt-6 text-justify'><Typewriter text="I'm a front-end web developer based in Bangladesh, passionate about cutting-edge, pixel-perfect, beautiful and user-friendly interfaces, driven by a love for turning ideas into interactive and engaging websites. I believe in the power of great design to enhance the user experience. Feel free to explore my projects below and get a glimpse of my coding journey." /></h3>
            </div>
            <div className='mt-6 lg:mt-10 flex flex-col items-center'>
                <FaAnglesDown className='text-center text-2xl mt-2' />
            </div>
        </div>
    );
};

export default About;