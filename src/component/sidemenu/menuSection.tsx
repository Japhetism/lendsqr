import { NavLink } from "react-router-dom";
import { UsersIcon } from "../../assets/svg/usersIcon";

interface IMenuItem {
    label: string;
    path: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface IMenuSection {
    title: string;
    items: IMenuItem[];
    isActivePath: (path: string) => boolean;
}

const MenuSection = ({ title, items, isActivePath }: IMenuSection) => (
    <div>
        <div className="menu-header">{title}</div>
        <ul>
            {items.map((item: IMenuItem, index: number) => (
                <li key={index} className={isActivePath(item.path) ? 'active' : ''}>
                    <item.icon />
                    <NavLink to={item.path}>
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

export default MenuSection;