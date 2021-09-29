import React, { useState } from "react";
import { SigninContainer } from './loginStyles';
import { useHistory, Redirect } from 'react-router-dom';
import { AuthService } from '../../service/authService';

const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    const [loginDetails, setLoginDetails] = useState(initialValues);
    const [username, setUsername] = useState(AuthService.getUserInfo());
    const user = (username) ? username : AuthService.getUserInfo()
    const history = useHistory();
    function handleChange(evt) {
        const { name, value } = evt.target;
        setLoginDetails({ ...loginDetails, [name]: value })
    }
    function handleLogin(evt) {
        evt.preventDefault();
        const formData = {
            email: loginDetails.email,
            password: loginDetails.password
        }
        AuthService.onLogin(formData)
            .then((success) => {
                console.log(success.user.nickname);
                const user = (username) ? username : AuthService.getUserInfo()
                if(user) {
                    history.push(`/feed/${user.user.nickname}`);
                }
            })
            .catch(error => console.log(error));
    }
    if(AuthService.getUserInfo()) {
        if(user) {
            return <Redirect to={{ pathname: `/feed/${user.user.nickname}`}} />
        }
    }
    return(
        <>
            <SigninContainer>
                <div className="signin-section">
                    <h2>Sign in with Social Club</h2>
                    <input type="text" name="email" value={loginDetails.email} onChange={handleChange} placeholder="Email"/>
                    <input type="password" name="password" value={loginDetails.password} onChange={handleChange} placeholder="Password"/>
                    <div className="flex-input">
                        <input type="checkbox" id="ckb-keep" name="keep-me" value="Keep"/>
                        <p className="text">Keep me Signed in</p>
                    </div>
                    <div className="forgot-password-section">
                        <p><a className="forgot-link" href="#">Forgot Password</a></p>
                        <button className="btn-signin" onClick={handleLogin}><b>Sign in</b></button>
                    </div>
                </div>
                <div className="social-media-section" style={{backgroundColor: "white"}}>
                    <h2>Sign in using</h2>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-playstation" /></a>
                        <a href="#"><i className="fab fa-xbox" /></a>
                        <a href="#"><i className="fab fa-facebook" /></a>
                        <a href="#"><i className="fab fa-google" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                    </div>
                </div>
                <div>
                    <p>Not a member? <a href="/register">Create a new account</a></p>
                </div>
            </SigninContainer>
        </>
    );
}

export default Login;
