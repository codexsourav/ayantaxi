import React, { useState } from 'react';
import axios from 'axios';
import { api_url } from '../../utils/helper';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post(api_url + '/api/login', { email, pass: password });
            console.log(response.data);
            // Handle success - redirect or show a success message
        } catch (error: any) {
            console.error('Error logging in:', error);
            // Handle error - show an error message or perform other actions
        }
    };

    return (
        <>
            <div className='relative w-screen h-screen bg-black'>
                <div className='absolute inset-0 z-10 flex justify-center items-center flex-col'>
                    <img src="/images/tlogo.png" className='w-40 mb-5' alt="Logo" />
                    <div className="w-80 h-auto bg-white p-5">
                        <div className="">
                            <label>Email ID</label>
                            <input type="text" value={email} onChange={handleEmailChange} />
                        </div>
                        <br />
                        <div className="">
                            <label>Password</label>
                            <input type="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <button className='bg-blue-950 w-full h-11 text-white mt-8' onClick={handleLogin}>Login</button>
                    </div>
                </div>
                <div className='absolute inset-0 z-0'>
                    <div className='w-full h-full bg-[url("/images/bg.jpg")] bg-cover bg-no-repeat bg-center opacity-50'></div>
                </div>
            </div>
        </>
    );

};

export default React.memo(Login);
