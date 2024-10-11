import { Chart } from "react-google-charts";
import Layout from "../../component/layout";
import CardGroup from "../../component/card/cardGroup";
import { formatPerformanceToArray, formatStatisticsToArray } from "../../utils/formatter";
import "./dashboard.scss";

const dashboardData = {
    statistics: {
        totalTransactions: 1242453,
        totalSettlements: 242453,
        totalLoans: 46732453,
        totalSavings: 109822453,
    },
    performance: {
        jan: 9240000000,
        feb: 8738430000,
        mar: 9600000000,
        apr: 8038400000,
        may: 8737083300,
        jun: 8920308380,
        jul: 9802939000,
        aug: 9928303090,
        sep: 9982380300,
        oct: 9939380300
    }
}
  
const options = {
    legend: { position: "none" },
};

const Dashboard = () => {
    return (
        <Layout title="Dashboard">
            <div className="dashboard">
                <CardGroup data={formatStatisticsToArray(dashboardData.statistics)} /> 
                <div className="dashboard__financial">
                    <div className="dashboard__financial__performance">
                        <span className="dashboard__financial__title">Financial Performance</span>
                        <div className="dashboard__financial__performance__chart">
                            <Chart
                                chartType="Line"
                                width="100%"
                                height="280px"
                                data={formatPerformanceToArray(dashboardData.performance)}
                                options={options}
                            />
                        </div>
                    </div>
                    <div className="dashboard__financial__revenue">
                        <span className="dashboard__financial__title">Total Revenue</span>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
