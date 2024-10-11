import Card from "../../component/card";
import Layout from "../../component/layout";
import { TransactionIcon } from "../../assets/svg/transactionIcon";
import { ScrollIcon } from "../../assets/svg/scrollIcon";
import { PiggyBankIcon } from "../../assets/svg/piggyBankIcon";
import { LoanIcon } from "../../assets/svg/loanIcon";
import { formatNumber } from "../../utils/formatter";
import "./dashboard.scss";

const dashboardData = {
    statistics: {
        totalTransactions: 1242453,
        totalSettlements: 242453,
        totalLoans: 46732453,
        totalSavings: 109822453
    }
}

const Dashboard = () => {
    
    const { totalTransactions, totalSettlements, totalLoans, totalSavings } = dashboardData.statistics;
    
    return (
        <Layout title="Dashboard">
            <div className="dashboard">
                <div className="dashboard__cards">
                    <Card
                        title="Total Transactions"
                        value={formatNumber(totalTransactions)}
                        backgroundColor="#F1D1FF"
                        icon={TransactionIcon}
                    />
                    <Card
                        title="Total Settlements"
                        value={formatNumber(totalSettlements)}
                        backgroundColor="#D6D1FF"
                        icon={ScrollIcon}
                    />
                    <Card
                        title="Total Loans"
                        value={formatNumber(totalLoans)}
                        backgroundColor="#FFE2D4"
                        icon={LoanIcon}
                    />
                    <Card
                        title="Total Savings"
                        value={formatNumber(totalSavings)}
                        backgroundColor="#FFCED5"
                        icon={PiggyBankIcon}
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
