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
    return (
        <div className="input-section">
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className="input"
            />
        </div>
    )
}

export default Input;