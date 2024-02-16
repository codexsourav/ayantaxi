import React, { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/admin/Login';
import Admin from './pages/admin/Admin';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const Home = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBicErnm5MQhQ9TEC8PHfQoBxQZEdv7v40&libraries=places&loading=async";
      script.onload = () => {
        console.log("Google Maps API script loaded.");
        setScriptLoaded(true);
      };
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    };

    loadScript();
  }, []);

  if (!scriptLoaded) {
    return <></>;
  }


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/admin" Component={Admin} />
          <Route path="/admin/login" Component={Login} />


        </Routes>


      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default React.memo(Home);