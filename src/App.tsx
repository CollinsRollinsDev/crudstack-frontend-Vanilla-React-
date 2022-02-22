import React from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Update from './Pages/Update';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ChangePassword from './Pages/ChangePassword';

function App() {
  return (
    <>
    <div>Hello man</div>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Homepage />} />
        <Route path='/update' element={<Update />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/changepassword' element={<ChangePassword />} /> */}
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
