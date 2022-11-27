import React from 'react';
import Home from './Pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;