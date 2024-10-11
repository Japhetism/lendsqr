import Card from "..";
import { ICard } from "../../../interfaces/card";
import "./cardGroup.scss";

interface ICardGroup {
    data: ICard[]
}

const CardGroup = ({ data }: ICardGroup) => {
    return (
        <div className="card-group">
            {data.map((item: ICard, index: number) => (
                <Card
                    title={item.title}
                    value={item.value}
                    backgroundColor={item.backgroundColor}
                    icon={item.icon}
                    key={index}
                />
            ))}
        </div>
    )
}

export default CardGroup;