import React, {Component} from 'react';
import './Navbar.scss';
import {Card, Container, Nav} from "react-bootstrap";
import Button from "react-bootstrap/Button";

class Navbar extends Component<any,any> {
    static Collapse: any;
    static Text: any;
    static Brand: any;
    static Toggle:any;

    render(){
    return (
        <h1>navbar</h1>
    );
    }
}

export default Navbar;