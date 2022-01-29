import React, {Component} from 'react';
import './Login.scss';
import auth from '../../security/Auth';
import {Paths} from "../../enums/paths";
import {Card, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";


class Login extends Component<any,any>{

    render() {
        return (
            <div className="login-container">
                <Card  style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Log in</Card.Title>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="email" placeholder="Email/login" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Hasło</Form.Label>
                                <Form.Control type="password" placeholder="Hasło" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Zaloguj
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

export default Login;