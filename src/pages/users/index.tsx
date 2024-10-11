import Card from "../../component/card";
import Layout from "../../component/layout";
import "./users.scss";

const usersData = {
    analysis: {
        users: 2453,
        activeUsers: 2453,
        usersWithLoans: 12453,
        usersWithSavings: 102453
    }
}

const Users = () => {
    return (
        <Layout title="Users">
            <div className="users">
                <div className="users__cards">
                    <Card title="Users" value="2453"/>
                    <Card title="Users" value="2453"/>
                    <Card title="Users" value="2453"/>
                    <Card title="Users" value="2453"/>
                </div>
            </div>
        </Layout>
    );
}

export default Users;
