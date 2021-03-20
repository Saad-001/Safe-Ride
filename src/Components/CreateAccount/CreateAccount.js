import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import googleLogo from '../../images/google_PNG19635.png';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


const CreateAccount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/rideDetails" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        error: ''
    })
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

    const handleGoogleSignIn = () => {

        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const {displayName, email} = result.user;
                console.log(result.user)
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });
    }


    const handleSubmit = (event) => {
        if (user.name && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const {displayName, email} = res.user;
                    const signedInUser = {name: displayName, email};
                    const newUserInfo = { ...user }
                    setUser(newUserInfo)
                    setLoggedInUser(signedInUser)
                    history.replace(from)
                    console.log(res.user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    const errorMessage = error.message;
                    newUserInfo.error = errorMessage;
                    setUser(newUserInfo);
                });
        }
        event.preventDefault()
    }
    return (
        <div className="container pt-5 pb-5">
            <h4 className="mb-5">Create an account</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onBlur={handleBlur} name="name" required placeholder="Enter your name" />
                </Form.Group>
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
                <Button variant="primary" type="submit">Create account</Button>
            </Form>
                <h4 style={{color: 'red'}} className="mt-3">{user.error}</h4>
            <div className="logo-div mt-5 d-flex">
                <p style={{ display: "inlineBlock" }} className="mt-2">or sign in with</p>
                <img onClick={handleGoogleSignIn} className="" src={googleLogo} alt="" />
            </div>
        </div>
    );
};

export default CreateAccount;