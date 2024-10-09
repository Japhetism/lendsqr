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
        <button type={type} className="button">{name}</button>
    )
}

export default Button;