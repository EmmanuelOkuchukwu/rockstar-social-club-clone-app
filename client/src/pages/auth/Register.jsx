import React from 'react';
import { RegisterContainer } from './loginStyles';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();
    function handleSubmit(evt) {
        evt.preventDefault();
        history.push('/feed');
    }
    return(
        <>
            <RegisterContainer>
                <div className="signin-section" style={{backgroundColor: "white"}}>
                    <h2>Sign in with Social Club</h2>
                    <input type="text" name="nickname" placeholder="Nickname" />
                    <input type="text" name="fullName" placeholder="Full Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="text" name="country" placeholder="Country" />
                    <input type="date" name="dob" placeholder="Date Of Birth" />
                    <div className="flex-input">
                        <input type="checkbox" id="ckb-keep" name="keep-me" value="Keep"/>
                        <p className="text">Keep me Signed in</p>
                    </div>
                    <div className="forgot-password-section">
                        <p><a className="forgot-link" href="#">Forgot Password</a></p>
                        <button className="btn-signin" onClick={handleSubmit}><b>Register Now</b></button>
                    </div>
                </div>
                <div>
                    <p>Not a member? <a href="#">Create a new account</a></p>
                </div>
            </RegisterContainer>
        </>
    );
}

export default Register;
