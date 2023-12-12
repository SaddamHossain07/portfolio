import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { MdWavingHand } from "react-icons/md";
const Contact = () => {
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="contact-bg rounded-xl pb-10 h-[calc(100vh-50px)] shadow-lg overflow-hidden sticky top-6 px-24 py-12 text-slate-300">
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
                    <form className="p-4">
                        <div className="relative mb-2">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaUser />
                            </div>
                            <input type="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" />
                        </div>
                        <div className="relative mb-2">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <MdEmail />
                            </div>
                            <input type="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your@email.com" />
                        </div>

                        <div className="col-span-full mb-4">
                            <textarea name="short_description" rows="2" placeholder="leave your message here...." className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4" />
                        </div>
                        <div className='flex justify-end'>
                            <button className='btn btn-sm bg-purple-400 text-indigo-950 hover:text-slate-200 btn-ghost rounded-md'><MdWavingHand />Say Hello</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;