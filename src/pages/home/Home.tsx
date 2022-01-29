import React from 'react';
import './Home.scss';
import Navbar from "../../components/navbar/Navbar";
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div>
            <Navbar/>
           <h1> Homepage!</h1>
        </div>
    );
}

export default Home;