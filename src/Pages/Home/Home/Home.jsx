import './Home.css'
import Typewriter from 'react-ts-typewriter';
const Home = () => {
    return (
        <div className="home-bg w-full min-h-screen overflow-hidden p-32">
            <div className='mt-12'>
                <h2 className='text-3xl font-black'>Welcome to my corner of the web!</h2>
                <h3 className='mt-6 text-justify'><Typewriter text="I'm a front-end web developer based in Bangladesh, passionate about cutting-edge, pixel-perfect, beautiful and user-friendly interfaces, driven by a love for turning ideas into interactive and engaging websites. I believe in the power of great design to enhance the user experience. Feel free to explore my projects below and get a glimpse of my coding journey." /></h3>
            </div>

        </div>
    );
};

export default Home;