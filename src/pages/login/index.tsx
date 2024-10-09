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
                <h2>Welcome!</h2>
                <h4>Enter details to login.</h4>
                <form>
                    <div className="form-group">
                    <input type="text" id="username" required />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;