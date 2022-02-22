import React, { useEffect, useLayoutEffect } from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Update from './Pages/Update';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ChangePassword from './Pages/ChangePassword';
import Cookies from "js-cookie";
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {

  const getLoggedIn = async() => {
    try {
      const res:any = await fetch(`https://crud-stack-server-side.vercel.app/login?queryP=test`, {
        method:"post",
        body:JSON.stringify({
          emailAddress:"kelvin",
          password:"pass"
        }),
        headers:{
          "Content-Type":"application/json"
        },
        credentials:'include'
      })
      console.log("done")
    } catch (error) {
      console.log(error)
    }
  }

  useLayoutEffect(() => {
    // getLoggedIn();
    // Cookies.set("initialized", "dsdkshbiou78383738v7ge88g")

  },[])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route path='/update' element={<Update />} /> */}
        <Route path='/login' element={<Login />} />
        {/* <Route path='/register' element={<Register />} /> */}
        {/* <Route path='/changepassword' element={<ChangePassword />} /> */}
      </Routes>
    </BrowserRouter>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
