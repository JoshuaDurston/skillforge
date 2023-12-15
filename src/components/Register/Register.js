import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Register.css';


const Register = () => {

    const [registerInfo, setRegisterInfo] = useState({
        id: '',
        password: '',
        checkPassword: '',
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegisterInfo((prevInfo) => ({ ...prevInfo, [name]: value}));
    };

    const logUser = (e) => {
        e.preventDefault();
        if(registerInfo.password !== registerInfo.checkPassword){
            console.log("Can't Register: Passwords do not match");
        }
        else{
            e.preventDefault();

            console.log('Register info:', registerInfo)
        }
    }


    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h1 className="register-heading">Welcome Back!</h1>
                <form onSubmit={logUser} className="register-form">
                    <label>Email or Username:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={registerInfo.id}
                        onChange={handleChange}
                        required
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        id="checkPassword"
                        name="checkPassword"
                        value={registerInfo.checkPassword}
                        onChange={handleChange}
                        required
                    />

                    <label>Re-Enter Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={registerInfo.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Create Account</button>
                </form>
            </div>
        </div>
    )
};

export default Register;