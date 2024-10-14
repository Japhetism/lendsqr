import { useNavigate } from "react-router-dom";
import "./actions.scss";

const TableActions = ({ user, isOpen, onToggle }: any) => {
    const navigate = useNavigate();

    const handleView = (user: any) => {
        console.log("Viewing user:", user);
        navigate(`/users/${user?.id}`);
    };

    const handleBlacklist = (user: any) => {
        console.log("Blacklisting user:", user);
    };

    const handleActivate = (user: any) => {
        console.log("Activating user:", user);
    };

    return (
        <div className="actions-cell">
            <button className="ellipsis-button" onClick={onToggle}>
                &#x022EE;
            </button>
            {isOpen && (
                <div className="dropdown">
                    <ul>
                        <li onClick={() => handleView(user)}>View</li>
                        <li onClick={() => handleBlacklist(user)}>Blacklist</li>
                        <li onClick={() => handleActivate(user)}>Activate</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TableActions;
