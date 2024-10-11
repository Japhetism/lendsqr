import { LoanColoredIcon } from "../../assets/svg/loanColoredIcon";
import { MoneyColoredIcon } from "../../assets/svg/moneyColoredIcon";
import { UserColoredIcon } from "../../assets/svg/usersColoredIcon";
import { UserGroupIcon } from "../../assets/svg/usersGroupIcon";
import Card from "../../component/card";
import Layout from "../../component/layout";
import { formatNumber } from "../../utils/formatter";
import "./users.scss";

const usersData = {
    statistics: {
        users: 2453,
        activeUsers: 2453,
        usersWithLoans: 12453,
        usersWithSavings: 102453
    }
}

const Users = () => {
    const { users, activeUsers, usersWithLoans, usersWithSavings } = usersData.statistics;
    return (
        <Layout title="Users">
            <div className="users">
                <div className="users__cards">
                    <Card
                        title="Users"
                        value={formatNumber(users)}
                        backgroundColor="#F1D1FF"
                        icon={UserColoredIcon}
                    />
                    <Card
                        title="Active User"
                        value={formatNumber(activeUsers)}
                        backgroundColor="#D6D1FF"
                        icon={UserGroupIcon}
                    />
                    <Card
                        title="Users With Loans"
                        value={formatNumber(usersWithLoans)}
                        backgroundColor="#FFE2D4"
                        icon={LoanColoredIcon}
                    />
                    <Card
                        title="Users With Savings"
                        value={formatNumber(usersWithSavings)}
                        backgroundColor="#FFCED5"
                        icon={MoneyColoredIcon}
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Users;
