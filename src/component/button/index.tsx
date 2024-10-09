import "./button.scss";

interface IButton {
    name: string;
    type: 'button' | 'submit';
    isLoading: boolean;
    onclick: () => void;
}

const Button = ({
    name,
    type,
    isLoading,
    onclick,
}: IButton) => {
    return (
        <div className="button-section">
            <button
                disabled={isLoading}
                type={type}
                className="button"
                onClick={onclick}
            >
                {isLoading ? (
                    <>
                        {name}
                        <span className="loading-dots">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </span>
                    </>
                ) : (
                    name
                )}
            </button>
        </div>
    );
}

export default Button;
