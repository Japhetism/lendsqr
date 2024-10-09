import Button from "../../component/button";
import Input from "../../component/input";
import "./login.scss"

const Login = () => {
    return (
        <div className="login-section">
            <div className="login-banner">
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="pablo">
                    <img src="/images/pablo-sign.png" alt="sign-in" />
                </div>
            </div>
            <div className="login-form">
                <span className="login-title">Welcome!</span>
                <span className="login-description">Enter details to login.</span>
                <form>
                    <Input type="email" name="email" placeholder="Email"  />
                    <Input type="password" name="password" placeholder="Password" />
                    <div className="forgot-password">
                        <span className="forgot-password">forgot password?</span>
                    </div>
                    <Button name="Login" type="button" />
                </form>
            </div>
        </div>
    )
}

export default Login;