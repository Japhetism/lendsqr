import Header from "../../component/header";
import SideMenu from "../../component/sidemenu";
import "./dashboard.scss";

const Dashboard = () => {
    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <SideMenu />
                <div className="content">
                    <h2>Welcome to My App</h2>
                    <p>This is the main content area.</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
