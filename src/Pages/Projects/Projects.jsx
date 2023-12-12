import { Scrollbars } from 'rc-scrollbars';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './Card';
AOS.init();

const Projects = () => {
    return (
        <>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="project-bg rounded-xl pb-10 h-[calc(100vh-50px)] shadow-lg overflow-hidden sticky top-6 px-24 py-12 text-slate-300">
                <Scrollbars autoHide
                    autoHideTimeout={500}
                    autoHideDuration={100}
                    thumbSize={30}>
                    <div className=''>
                        <h2 className='text-3xl text-center font-black'>My Works</h2>
                        <h3 className='mt-6 text-justify'>Welcome to the showcase of my front-end journey where ReactJS is the brush and user interfaces are the canvas. Each project is a meticulous creation, a symphony of code and design that brings digital experiences to life. Step into the world of responsive and dynamic React applications, where every click tells a story of seamless interactions and visually captivating designs.</h3>
                    </div>
                    <div className='mt-6 flex gap-2 justify-center'>
                        <button className='btn btn-sm btn-outline text-slate-300 btn-ghost rounded-sm'>ReactJS</button>
                        <button className='btn btn-sm btn-outline text-slate-300 btn-ghost rounded-sm'>NextJS</button>
                        <button className='btn btn-sm btn-outline text-slate-300 btn-ghost rounded-sm'>Tailwind</button>
                        <button className='btn btn-sm btn-outline text-slate-300 btn-ghost rounded-sm'>MUI</button>
                    </div>
                    <Card></Card>
                </Scrollbars>
            </div>
        </>
    );
};

export default Projects;