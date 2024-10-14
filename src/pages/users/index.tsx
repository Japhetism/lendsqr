import Card from "../../component/card";
import Layout from "../../component/layout";
import { formatNumber } from "../../utils/formatter";
import { LoanColoredIcon } from "../../assets/svg/loanColoredIcon";
import { MoneyColoredIcon } from "../../assets/svg/moneyColoredIcon";
import { UserColoredIcon } from "../../assets/svg/usersColoredIcon";
import { UserGroupIcon } from "../../assets/svg/usersGroupIcon";
import { User, allUsers } from "../../utils/helper";
import "./users.scss";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import DataTable from "../../component/table";

const usersData = {
    statistics: {
        users: 2453,
        activeUsers: 2453,
        usersWithLoans: 12453,
        usersWithSavings: 102453
    }
}

const columnHelper = createColumnHelper<User>();

const columns: ColumnDef<User, any>[] = [
    columnHelper.accessor('organization', {
        cell: info => info.getValue(),
        header: () => 'Organization',
    }),
    columnHelper.accessor('username', {
        cell: info => info.getValue(),
        header: () => 'Username',
    }),
    columnHelper.accessor('email', {
        cell: info => info.getValue(),
        header: () => 'Email',
    }),
    columnHelper.accessor('phoneNumber', {
        cell: info => info.getValue(),
        header: () => 'Phone Number',
    }),
    columnHelper.accessor('dateJoined', {
        cell: info => {
            const dateValue = new Date(info.getValue());
            const day = String(dateValue.getDate()).padStart(2, '0');
            const month = String(dateValue.getMonth() + 1).padStart(2, '0');
            const year = dateValue.getFullYear();
            
            return `${day}-${month}-${year}`;
        },
        header: () => 'Date Joined',
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

const Users = () => {

    console.log("users are ", allUsers);
    
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
                <div className="users__users-table-container">
                    <div className="users__users-table-container__datatable">
                        <DataTable
                            data={allUsers}
                            columns={columns}
                            initialPageSize={100}
                            showPagination
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Users;
