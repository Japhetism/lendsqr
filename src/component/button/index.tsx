import "./button.scss";

interface IButton {
    name: string;
    type: 'button' | 'submit';
    onclick: () => void;
}

const Button = ({
    name,
    type,
    onclick,
}: IButton) => {
    return (
        <div className="button-section">
            <button type={type} className="button" onClick={() => onclick()}>{name}</button>
        </div>
    )
}

export default Button;