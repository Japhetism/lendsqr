import { useState } from "react";
import { NotificationIcon } from "../../assets/svg/notificationIcon";
import { ArrowDownIcon } from "../../assets/svg/arrowDownIcon";
import SearchInput from "../searchInput";
import "./header.scss";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="logo-search-section">
                <div>
                    <img src="/images/logo.png" alt="logo" className="logo" />
                </div>
                <div className="search">
                    <SearchInput placeholder="Search for anything" onSearch={() => {}} />
                </div>
                
            </div>
            <div className="user-section">
                <span className="doc">DOCS</span>
                <NotificationIcon />
                <div className="user-options" onClick={toggleDropdown}>
                    <img src="/images/user.png" alt="user" className="user-image" />
                    <span className="username">Adedeji</span>
                    <ArrowDownIcon />
                </div>
                {isDropdownOpen && (
                    <div className="dropdown-container">
                        <ul>
                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
