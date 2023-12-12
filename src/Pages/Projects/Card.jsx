// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './css/style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Card = () => {
    return (
        <div className='mt-4 grid grid-cols-1'>
            <div data-aos="fade-up"
                data-aos-duration="3000"
                className='w-full bg-indigo-900 sticky top-0 px-4 rounded-md'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper h-[250px]"
                >
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/R3Ghn4j/1.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/30vKnjr/2.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/3NjdGXk/3.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/3fMMsT5/4.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/vvH5j74/5.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/n3YhYn6/6.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/ypz0bhM/7.png" />
                    </SwiperSlide>
                </Swiper>
                <div className='my-4 space-y-2'>
                    <h3 className='text-lg font-semibold'>myStock-Pro</h3>
                    <p className='text-justify text-xs'>myStock-Pro is a Inventory management system. Where user can listing there product, able to sales product, track their stock and selling status. We integrated in this application a high secure authentication system and payment gateway. We use ReactJS and Tailwind CSS for front-end, Expressjs and noSQL database MongoDB in back-end. The client site is hosted on firebase and the server site is hosted on vercel.</p>
                    <div className='flex gap-2'>
                        <a href='https://github.com/SaddamHossain07/my-stock-pro-client' className='btn btn-xs btn-outline text-slate-300 btn-ghost rounded-sm'>Code Link</a>
                        <a href='https://mystockpro-d8f17.web.app/' className='btn btn-xs btn-outline text-slate-300 btn-ghost rounded-sm'>Preview</a>
                        <a href='https://mystockpro-d8f17.web.app/' className='btn btn-xs btn-outline text-slate-300 btn-ghost rounded-sm'>Case Study</a>
                    </div>
                </div>
            </div>

            <div className='w-full bg-indigo-900 mt-24 sticky top-0 px-4 rounded-md'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper h-[250px]"
                >
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/jbMtZc6/1.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/FJC9tMs/2.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/L1sXFBS/3.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/F058hGB/4.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/Jn61wbH/5.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/t39Ddqs/6.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/ccBZ5jB/7.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/Rbs68vJ/8.png" />
                    </SwiperSlide>
                </Swiper>

                <div className='my-4 space-y-2'>
                    <h3 className='text-lg font-semibold'>BookishHaven</h3>
                    <p className='text-justify text-xs'>BookishHaven is a Library management system based on SPA (single page application) developed with the latest technologies. We use ReactJS and Tailwind CSS for front-end, Expressjs and noSQL database MongoDB in back-end. The client site is hosted on firebase and the server site is hosted on vercel.</p>

                    <div className='flex gap-2'>
                        <a href='https://github.com/SaddamHossain07/bookish-haven-client' className='btn btn-xs btn-outline text-slate-300 btn-ghost rounded-sm'>Code Link</a>
                        <a href='https://bookishhaven-fdd6d.web.app/' className='btn btn-xs btn-outline text-slate-300 btn-ghost rounded-sm'>Preview</a>
                        <a href='https://bookishhaven-fdd6d.web.app/' className='btn btn-xs btn-outline text-slate-300 btn-ghost rounded-sm'>Case Study</a>
                    </div>
                </div>
            </div>

            <div className='w-full bg-indigo-900 mt-24 sticky top-0 px-4 rounded-md'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper h-[250px]"
                >
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/XyCbGPy/1.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/n6QDTVr/2.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/17NkJz6/3.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/stmB1fK/4.png" />
                    </SwiperSlide>
                    <SwiperSlide className='h-48'>
                        <img className='h-48' src="https://i.ibb.co/dGgLxwG/5.png" />
                    </SwiperSlide>
                </Swiper>

                <div className='my-4 space-y-2'>
                    <h3 className='text-lg font-semibold'>Winter Fashion</h3>
                    <p className='text-justify text-xs'>Winter Fashion is a simple E-commerce website developed using the latest technologies. We use ReactJS and Tailwind CSS for front-end, Expressjs and noSQL database MongoDB in back-end. The client site is hosted on firebase and the server site is hosted on vercel.</p>

                    <div className='flex gap-2'>
                        <a href='https://github.com/SaddamHossain07/winter-fashion' className='btn btn-xs btn-outline text-slate-300 btn-ghost rounded-sm'>Code Link</a>
                        <a href='https://winter-fashion-e713e.web.app/' className='btn btn-xs btn-outline text-slate-300 btn-ghost rounded-sm'>Preview</a>
                        <a href='https://winter-fashion-e713e.web.app/' className='btn btn-xs btn-outline text-slate-300 btn-ghost rounded-sm'>Case Study</a>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Card;