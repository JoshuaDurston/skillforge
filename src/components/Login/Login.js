import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {

    const [loginInfo, setLoginInfo] = useState({
        id: '',
        password: '',
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo((prevInfo) => ({ ...prevInfo, [name]: value}));
    };

    const logUser = (e) => {
        e.preventDefault();

        console.log('Login info:', loginInfo)
    }


    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h1 className="login-heading">Welcome Back!</h1>
                <form onSubmit={logUser} className="login-form">
                    <label>Email or Username:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={loginInfo.id}
                        onChange={handleChange}
                        required
                    />

                    <label>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={loginInfo.password}
                        onChange={handleChange}
                        required
                    />
                    <div className="login-button-wrapper">
                        <button type="submit">Login</button>
                        <Link to="/register">
                            <button type="submit">Register</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;