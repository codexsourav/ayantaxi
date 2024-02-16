import React from 'react';
import { ContainerWrapper } from '../../wrapper/UserWrapper';
import BookingView from '../booking/BookingView';

const Header = () => {
    return (
        <>
            <div className="relative w-full h-full md:h-screen  md:max-h-[700px] bg-[url('/images/bg.jpg')] bg-cover bg-center ">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <ContainerWrapper className='grid md:grid-cols-2 place-items-center h-full relative z-10'>
                    <div className='flex flex-col gap-5 md:mt-0 mt-10 md:text-left text-center'>
                        <h1 className='text-2xl font-extrabold text-white'>Welcome To AyanTaxi</h1>
                        <h1 className='text-6xl uppercase font-extrabold text-white'>Book Cab For Your Ride</h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed perspiciatis expedita fugit iste in itaque omnis pariatur, eveniet dolores neque excepturi necessitatibus deleniti possimus ratione maiores soluta facilis ducimus.</p>
                        <div className="flex gap-5 mt-10 justify-center items-center md:justify-start md:items-start">
                            <div className="w-44 h-14 border-2 flex justify-center items-center text-white text-xl font-bold hover:bg-white hover:text-black cursor-pointer transition-all ">ABOUT US</div>
                            <div className="w-44 h-14 border-2 flex justify-center items-center text-white text-xl font-bold hover:bg-white hover:text-black cursor-pointer transition-all ">CONTACT US</div>
                        </div>
                    </div>
                    <BookingView />
                </ContainerWrapper>
            </div>
        </>
    );
};

export default React.memo(Header);