import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import MenuSection from "./menuSection";
import { NextIcon } from "../../assets/svg/nextIcon";
import { BriefCaseIcon } from "../../assets/svg/briefCaseIcon";
import { HamburgerIcon } from "../../assets/svg/hamburgerIcon";
import { CloseIcon } from "../../assets/svg/closeIcon";
import { HomeIcon } from "../../assets/svg/homeIcon";
import { menuItems } from "../../fixtures/menuItems";
import "./sidemenu.scss";

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActivePath = (path: string) => location.pathname === path;

    return (
        <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}    
            </div>
            <div className="switch">
                <BriefCaseIcon />
                <span>Switch Organization</span>
                <NextIcon />
            </div>
            <div>
                <ul>
                    <li className={isActivePath("/dashboard") ? 'active' : ''}>
                        <HomeIcon />
                        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
            </div>
            {Object.entries(menuItems).map(([category, items]) => (
                <MenuSection
                    key={category}
                    title={category}
                    items={items}
                    isActivePath={isActivePath}
                />
            ))}
        </div>
    );
};

export default SideMenu;
