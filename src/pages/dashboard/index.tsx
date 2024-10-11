import Layout from "../../component/layout";
import CardGroup from "../../component/card/cardGroup";
import { formatStatisticsToArray } from "../../utils/formatter";
import "./dashboard.scss";

const dashboardData = {
    statistics: {
        totalTransactions: 1242453,
        totalSettlements: 242453,
        totalLoans: 46732453,
        totalSavings: 109822453,
    }
}

const Dashboard = () => {
    return (
        <Layout title="Dashboard">
            <div className="dashboard">
                <CardGroup data={formatStatisticsToArray(dashboardData.statistics)} /> 
            </div>
        </Layout>
    );
}

export default Dashboard;
