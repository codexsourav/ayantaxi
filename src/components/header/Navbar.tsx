import React, { useState } from 'react';
import { ContainerWrapper } from '../../wrapper/UserWrapper';
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <>
            <div className="w-full bg-[#304088] h-16">
                <ContainerWrapper className='h-hull flex justify-between items-center'>

                    <img src="/images/blogo.png" className='h-16 md:hidden block' />
                    <div className={`${!show ? "hidden " : "flex fixed"} top-0 right-0  md:relative w-screen h-screen bg-blue-950 md:bg-transparent md:flex justify-center items-center  md:h-16 z-50`}>
                        <div className="md:hidden text-4xl text-white absolute top-4 right-4 cursor-pointer" onClick={() => setShow(false)}><IoMdClose /></div>
                        <ul className='flex justify-center items-center  md:flex-row flex-col  font-bold h-full md:gap-0 gap-3'>
                            <li className=' cursor-pointer hover:bg-[#f9b054] transition-all w-full md:w-auto md:h-full flex justify-center items-center text-center py-4 md:py-0 md:px-6 text-white'>HOME</li>
                            <li className=' cursor-pointer hover:bg-[#f9b054] transition-all w-full md:w-auto md:h-full flex justify-center items-center text-center py-4 md:py-0 md:px-6 text-white'>ABOUT US</li>
                            <li className=' cursor-pointer hover:bg-[#f9b054] transition-all w-full md:w-auto md:h-full flex justify-center items-center text-center py-4 md:py-0 md:px-6 text-white'>OUR TOUR PACKAGES</li>
                            <li className=' cursor-pointer hover:bg-[#f9b054] transition-all w-full md:w-auto md:h-full flex justify-center items-center text-center py-4 md:py-0 md:px-6 text-white'>CAR RENTAL</li>
                            <li className=' cursor-pointer hover:bg-[#f9b054] transition-all w-full md:w-auto md:h-full flex justify-center items-center text-center py-4 md:py-0 md:px-6 text-white'>GALLERY</li>
                            <li className=' cursor-pointer hover:bg-[#f9b054] transition-all w-full md:w-auto md:h-full flex justify-center items-center text-center py-4 md:py-0 md:px-6 text-white'>CONTACT</li>
                        </ul>
                    </div>
                    <div className="text-white text-4xl md:hidden" onClick={() => setShow(true)}><IoMdMenu /></div>
                </ContainerWrapper>
            </div>
        </>
    );
};

export default React.memo(Navbar);