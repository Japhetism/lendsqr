import "./dashboardLoader.scss";

const DashboardLoader = () => {
    return (
        <div className="dashboard-loader">
            <div className="dashboard-loader__card"></div>
            <div className="dashboard-loader__chart"></div>
            <div className="dashboard-loader__revenue"></div>
            <div className="dashboard-loader__transactions">
                <div className="dashboard-loader__transaction-item"></div>
                <div className="dashboard-loader__transaction-item"></div>
                <div className="dashboard-loader__transaction-item"></div>
                <div className="dashboard-loader__transaction-item"></div>
                <div className="dashboard-loader__transaction-item"></div>
            </div>
        </div>
    );
};

export default DashboardLoader;
