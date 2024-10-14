import { ReactNode } from "react";
import Header from "../header";
import SideMenu from "../sidemenu";
import "./layout.scss";

interface ILayout {
    title: string;
    children: ReactNode;
}

const Layout = ({ title, children }: ILayout) => {
    return (
        <div className="layout">
            <Header />
            <div className="main-content">
                <SideMenu />
                <div className="content">
                    <div className="content__title">{title}</div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;