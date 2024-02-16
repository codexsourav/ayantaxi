import React, { useState } from 'react';
import AutoComplete, { DatePickMe, InputBox, InputSelectBox, TimePicker } from '../GoogleInputBoc';
import { addressOptions } from '../../utils/mapOptons';
import axios from 'axios';
import { toast } from 'react-toastify';
import { api_url } from '../../utils/helper';

const BookingView: React.FC = () => {
    const [fromAddress, setFromAddress] = useState<string>("");
    const [toAddress, setToAddress] = useState<string>("");
    const [pickupDate, setPickupDate] = useState<string>("");
    const [pickupTime, setPickupTime] = useState<string>("");
    const [selectedCar, setSelectedCar] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [mobileNumber, setMobileNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [selectedTab, setSelectedTab] = useState<string>("Local"); // Initial selected tab is "Local"

    const handleTabClick = (tabName: string) => {
        setSelectedTab(tabName);
    };

    const handleInputChange = (setter: Function) => (value: string) => {
        setter(value);
    };

    const validateInputs = () => {
        const errors: { [key: string]: string } = {};

        if (!fromAddress) {
            errors.fromAddress = "Please enter 'From' address";
        }
        if (!toAddress) {
            errors.toAddress = "Please enter 'To' address";
        }
        if (!pickupDate) {
            errors.pickupDate = "Please select pickup date";
        }
        if (!pickupTime) {
            errors.pickupTime = "Please select pickup time";
        }
        if (!selectedCar) {
            errors.selectedCar = "Please select a car";
        }
        if (!userName) {
            errors.userName = "Please enter your name";
        }
        if (!mobileNumber) {
            errors.mobileNumber = "Please enter your mobile number";
        }
        if (!email) {
            errors.email = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Please enter a valid email address";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleBookingSubmit = () => {
        const isValid = validateInputs();
        if (isValid) {
            SubmitData();
        }
    };

    const SubmitData = async () => {

        try {
            setLoading(true);
            const response = await axios.post(api_url + '/api/booking', {
                fromAddress,
                toAddress,
                pickupDate,
                pickupTime,
                selectedCar,
                userName,
                mobileNumber,
                email,
            });
            setLoading(false);
            handleClearAll();
            toast.success("Your Booking is Created");
            console.log('Booking created:', response.data);
        } catch (error) {
            setLoading(false)
            toast.error("Your Booking Create Field!");
            console.error('Error creating booking:', error);
        }
    };

    const handleClearAll = () => {
        setFromAddress("");
        setToAddress("");
        setPickupDate("");
        setPickupTime("");
        setSelectedCar("");
        setUserName("");
        setMobileNumber("");
        setEmail("");
    };

    return (
        <div className="flex justify-center items-center h-full md:mt-0 mt-16 mb-10">
            <div className=" w-full md:w-[600px] bg-white/30 shadow-xl backdrop-blur-md">
                <div className="grid grid-cols-3 uppercase text-white font-bold text-xl border-b-2">
                    <div className={`p-3 cursor-pointer select-none ${selectedTab === 'Local' ? 'bg-white/80 text-blue-950' : ''} text-center h-full`} onClick={() => handleTabClick('Local')}>Local</div>
                    <div className={`p-3 cursor-pointer select-none ${selectedTab === 'OneWay' ? 'bg-white/80 text-blue-950' : ''} text-center border-l-2 h-full`} onClick={() => handleTabClick('OneWay')}>OneWay</div>
                    <div className={`p-3 cursor-pointer select-none ${selectedTab === 'RoundTrip' ? 'bg-white/80 text-blue-950' : ''} text-center border-l-2 h-full`} onClick={() => handleTabClick('RoundTrip')}>RoundTrip</div>
                </div>
                <div className="p-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="">
                            <label className='font-bold text-white uppercase'>From</label>
                            <AutoComplete value={fromAddress} options={addressOptions} onPlaceSelect={(e) => handleInputChange(setFromAddress)(e?.formatted_address!)} className='bg-white/30 backdrop-blur-3xl' />
                            {errors.fromAddress && <div className="text-red-500 text-sm">{errors.fromAddress}</div>}
                        </div>
                        <div className="">
                            <label className='font-bold text-white uppercase'>To</label>
                            <AutoComplete value={toAddress} options={addressOptions} onPlaceSelect={(e) => handleInputChange(setToAddress)(e?.formatted_address!)} className='bg-white/30 backdrop-blur-3xl' />
                            {errors.toAddress && <div className="text-red-500 text-sm">{errors.toAddress}</div>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div className="">
                            <label className='font-bold text-white uppercase'>Pickup Date</label>
                            <DatePickMe selectedDate={pickupDate} setSelectedDate={handleInputChange(setPickupDate)} className='bg-white/30 backdrop-blur-3xl' />
                            {errors.pickupDate && <div className="text-red-500 text-sm">{errors.pickupDate}</div>}
                        </div>
                        <div className="">
                            <label className='font-bold text-white uppercase'>Pickup Time</label>
                            <TimePicker selectedTime={pickupTime} onChange={handleInputChange(setPickupTime)} className='bg-white/30 backdrop-blur-3xl' />
                            {errors.pickupTime && <div className="text-red-500 text-sm">{errors.pickupTime}</div>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div className="">
                            <label className='font-bold text-white uppercase'>Select Car</label>
                            <InputSelectBox className='bg-white/30 backdrop-blur-3xl' value={selectedCar} onChange={handleInputChange(setSelectedCar)}>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV Ertiga">SUV Ertiga</option>
                                <option value="SUV">SUV</option>
                                <option value="Swift Dezire">Swift Dezire</option>
                            </InputSelectBox>
                            {errors.selectedCar && <div className="text-red-500 text-sm">{errors.selectedCar}</div>}
                        </div>
                        <div className="">
                            <label className='font-bold text-white uppercase'>Your Name</label>
                            <InputBox placeholder='Enter Your name' onChange={handleInputChange(setUserName)} value={userName} className='bg-white/30 backdrop-blur-3xl' />
                            {errors.userName && <div className="text-red-500 text-sm">{errors.userName}</div>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <div className="">
                            <label className='font-bold text-white uppercase'>Mobile Number</label>
                            <InputBox placeholder='Enter Your mobile number' onChange={handleInputChange(setMobileNumber)} value={mobileNumber} className='bg-white/30 backdrop-blur-3xl' />
                            {errors.mobileNumber && <div className="text-red-500 text-sm">{errors.mobileNumber}</div>}
                        </div>
                        <div className="">
                            <label className='font-bold text-white uppercase'>Email ID</label>
                            <InputBox placeholder='Enter Your email' onChange={handleInputChange(setEmail)} value={email} className='bg-white/30 backdrop-blur-3xl' />
                            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                        </div>
                    </div>
                    <button className="col-span-2 w-full h-[50px] mt-6 cursor-pointer font-extrabold bg-blue-950  uppercase text-white flex justify-center items-center" onClick={handleBookingSubmit}>Book Your Ride</button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(BookingView);
