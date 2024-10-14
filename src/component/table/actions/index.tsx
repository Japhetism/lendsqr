import "./actions.scss";

const TableActions = ({ user, isOpen, onToggle }: any) => {
    const handleView = (user: any) => {
        console.log("Viewing user:", user);
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
