import React, { useContext } from 'react';
import { useState } from 'react';
import './Login.css'
import { Form, Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    // i was forced to console this for deploying site in netlify
    console.log(loggedInUser)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/rideDetails" } };

    const [user, setUser] = useState({
        email: '',
        password: ""
    });

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }

        if (event.target.name === "password") {
            isFieldValid = /\d{1}/.test(event.target.value);
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (event) => {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
             const newUserInfo = {...user}
             setUser(newUserInfo);
             setLoggedInUser(newUserInfo);
             history.replace(from);
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage, errorCode)
            });

        event.preventDefault()
    }
    return (
        <div className="container-fluid pt-5 pb-5" style={{height: "100vh" ,backgroundColor: "rgb(197, 238, 249)"}}>
            <div className="container">
            <h2>Log in</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleBlur} name="email" required placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handleBlur} name="password" required placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit} type="submit">Log in</Button>
                    <p className="mt-4">Don't have an account? <a style={{color: "slateBlue", fontWeight: "bold"}} href="/createAccount">create an account</a></p>
                </Form>
            </div>
        </div>
    );
};

export default Login;