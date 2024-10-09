import Button from "../../component/button";
import Input from "../../component/input";
import { useViewModel } from "./useViewmodel";
import "./login.scss"

const Login = () => {

    const {
        formData,
        formDataError,
        setFormData,
        handleLogin,
    } = useViewModel();

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
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        error={formDataError?.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        error={formDataError?.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <div className="forgot-password">
                        <span className="forgot-password">forgot password?</span>
                    </div>
                    <Button name="Login" type="button" onclick={handleLogin} />
                </form>
            </div>
        </div>
    )
}

export default Login;