import React from "react";
import './LoginRegister'

const LoginRegister =() => {
    return(
        <div className="wrapper">
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text"placeholder="username"required />
                    </div>
                    <div className="input-box">
                        <input type="password"placeholder="password"required />
                    </div>
                    <div className="remember-forgot">
                        <label htmlFor="checkbox">Remember me</label>
                        <a href="">Forgot password</a>
                    </div>
                    <button type="submit">Login</button>
                </form>

            </div>

        </div>
    );
};


export default LoginRegister;