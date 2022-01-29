import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Paths} from './enums/paths';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={Paths.HOME} element={<Home/>}/>
          <Route path={Paths.LOGIN} element={<Login/>}/>
          <Route path={Paths.REGISTER} element={<Register/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
