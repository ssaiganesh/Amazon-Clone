import React, {useState} from 'react';
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "./firebase";

function Login(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            }).catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                navigate('/')
            }
        }).catch(error => alert(error.message))

    }

    return (
        <div className={"login"}>
            <Link to='/'>
                <img className={"login__logo"}
                     src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png'}/>
            </Link>
            <div className={'login__container'}>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type={'text'} value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type={'password'} value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn} className={'login__signInButton'}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to our Amazon Clone's Conditions of Use & Sale. Please see our Privacy
                    Notice, our Cookies
                    Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className={'login__registerButton'}>Create your Amazon Clone
                    Account
                </button>
            </div>

        </div>
    );
}

export default Login;