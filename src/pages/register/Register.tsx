import React from 'react';
import './Register.scss';
import {Card, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Register() {
    return (
        <div className="login-container">
            <Card  style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Rejestracja</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLogin">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="email" placeholder="Nazwa użytkownika" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control type="password" placeholder="Hasło" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRepeatPassword">
                            <Form.Label>Powtórz hasło</Form.Label>
                            <Form.Control type="password" placeholder="Hasło" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Zarejestruj się
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Register;