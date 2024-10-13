import { Chart } from "react-google-charts";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import Layout from "../../component/layout";
import CardGroup from "../../component/card/cardGroup";
import DataTable from "../../component/table";
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
    },
    transactions: [
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "pending" },
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "successful" },
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "pending" },
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "failed" },
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "successful" },
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "successful" },
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "failed" },
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "pending" },
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "pending" },
        { customerName: "James Caleb", email: "jamescaleb@gmail.com", phoneNumber: "07098290191", customerId: "55555", date: "2024-10-10", amount: 374893, status: "pending" }
    ]
    
}

interface ITransactions {
    customerName: string;
    customerId: string;
    email: string;
    phoneNumber: string;
    date: string;
    amount: number;
    status: string;
}

const columnHelper = createColumnHelper<ITransactions>();

const columns: ColumnDef<ITransactions, any>[] = [
    columnHelper.accessor('customerName', {
        cell: info => info.getValue(),
        header: () => 'Customer Name',
    }),
    columnHelper.accessor('customerId', {
        cell: info => info.getValue(),
        header: () => 'Customer ID',
    }),
    columnHelper.accessor('email', {
        cell: info => info.getValue(),
        header: () => 'Email',
    }),
    columnHelper.accessor('phoneNumber', {
        cell: info => info.getValue(),
        header: () => 'Phone Number',
    }),
    columnHelper.accessor('date', {
        cell: info => {
            const dateValue = new Date(info.getValue());
            const day = String(dateValue.getDate()).padStart(2, '0');
            const month = String(dateValue.getMonth() + 1).padStart(2, '0');
            const year = dateValue.getFullYear();
            
            return `${day}-${month}-${year}`;
        },
        header: () => 'Date',
    }),
    columnHelper.accessor('amount', {
        cell: info => {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'NGN',
            }).format(info.getValue());
        },
        header: () => 'Amount',
    }),
    columnHelper.accessor('status', {
        cell: info => {
            const status = info.getValue();
            
            return (
                <div className={`status-cell status-${status}`}>
                    {status}
                </div>
            );
        },
        header: () => 'Status',
    }),
];

const options = {
    legend: { position: "none" },
};

const Dashboard = () => {

    const pieChartData = [
        ["", ""],
        ["Savings", dashboardData.statistics.totalSavings],
        ["Loans", dashboardData.statistics.totalLoans]
    ]

    return (
        <Layout title="Dashboard">
            <div className="dashboard">
                <CardGroup data={formatStatisticsToArray(dashboardData.statistics)} /> 
                <div className="dashboard__financial">
                    <div className="dashboard__financial__performance">
                        <span className="title">Financial Performance</span>
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
                        <span className="title">Total Revenue</span>
                        <Chart
                            chartType="PieChart"
                            data={pieChartData}
                            options={options}
                            width={"100%"}
                            height={"280px"}
                        />
                    </div>
                </div>
                <div className="dashboard__transactions">
                    <span className="title">Recent Transactions</span>
                    <div className="dashboard__transactions__table">
                        <DataTable
                            data={dashboardData.transactions}
                            columns={columns}
                            initialPageSize={20}
                            showPagination={false}
                        />
                    </div>
                    
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
