import "./card.scss";

interface ICard {
    title: string;
    value: string;
    backgroundColor?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Card = ({
    title,
    value,
    backgroundColor = "#FFFFFF",
    icon,
}: ICard) => {
    
    const Icon = icon;

    return (
        <div className="card">
            <div className="card__content">
                <div className="card__content__icon" style={{ backgroundColor }}>
                    <Icon />
                </div>
                <div className="card__content__title">
                    {title}
                </div>
                <div className="card__content__value">
                    {value}
                </div>
            </div>
        </div>
    )
}

export default Card;