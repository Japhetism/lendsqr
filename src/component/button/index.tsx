import "./button.scss";

interface IButton {
    name: string;
    type: 'button' | 'submit';
}

const Button = ({
    name,
    type,
}: IButton) => {
    return (
        <div className="button-section">
            <button type={type} className="button">{name}</button>
        </div>
    )
}

export default Button;