import { UserColoredIcon } from "../../assets/svg/usersColoredIcon";
import "./card.scss";

interface ICard {
    title: string;
    value: string;
}

const Card = ({
    title,
    value,
}: ICard) => {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__content__icon">
                    <UserColoredIcon />
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