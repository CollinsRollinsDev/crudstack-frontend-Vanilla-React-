import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  try {
    const test = async() => {
     const res = await fetch(`https://crud-stack-server-side.vercel.app/login?queryP=test`, {
      method:"post",
      body:JSON.stringify({
        emailAddress:'kelvin',
        password:'pass'
      }),
      headers:{
        "Content-Type":"application/json"
      },
      credentials:'include'
    })
    const data = await res.json()
    console.log(data)
    }
    test()
   } catch (error) {
     console.log(error)
   }
  return (
    <Router>
      <div>Hello World</div>
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
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
