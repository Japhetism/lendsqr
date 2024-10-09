import { useState } from "react";
import "./input.scss";

interface IInput {
    type: 'text' | 'email' | 'password' | 'numeric' | 'date';
    placeholder: string;
    name: string;
}

const Input = ({
    type,
    placeholder,
    name,
}: IInput) => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="input-section">
            <input
                name={name}
                type={type === "password" && showPassword ? "text" : type}
                placeholder={placeholder}
                className="input"
            />
            {type === 'password' && (
                <span 
                    className="toggle-password" 
                    onClick={handleToggleShowPassword}
                    onKeyDown={(e) => e.key === 'Enter' && handleToggleShowPassword()}
                    tabIndex={0}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </span>
            )}
        </div>
    )
}

export default Input;