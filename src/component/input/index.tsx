import { ChangeEvent, useState } from "react";
import "./input.scss";

interface IInput {
    type: 'text' | 'email' | 'password' | 'numeric' | 'date';
    placeholder: string;
    name: string;
    error?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
    type,
    placeholder,
    name,
    error,
    onChange,
}: IInput) => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="input-container">
             <div className="input-section">
                <input
                    name={name}
                    type={type === "password" && showPassword ? "text" : type}
                    placeholder={placeholder}
                    className="input"
                    onChange={onChange}
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
        {error && ( <span className="input-error">{error}</span>)}
        </div>
    )
}

export default Input;