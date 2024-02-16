import React from 'react';

const Admin = () => {
    return (
        <>
            <div className='p-10'>
                <h1 className='font-bold text-3xl mb-10'>Bookings</h1>
                <div className="border w-full h-36 flex">
                    <div className="h-full w-40 flex justify-center items-center text-center text-4xl font-bold border-r">
                        <h1>5 MAR 2024</h1>
                    </div>
                    <div className="flex justify-between w-full px-10 items-center">
                        <div className="font-semibold text-gray-950 flex flex-col gap-1">
                            <p>Name: Sourav Bapari</p>
                            <p>Email: sourav0w@gmail.com </p>
                            <p>Mobile: +91 9382156026</p>
                            <p>Car: SUV</p>
                        </div>
                        <div className="flex flex-col gap-1 font-semibold text-gray-950">
                            <p>From: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ipsa?</p>
                            <p>To: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, ipsa?</p>
                            <p>PickupDate: 02/11/2001</p>
                            <p>Pickup Time: 02/11/2001</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Admin);