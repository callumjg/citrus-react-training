import Layout from "../components/Layout";
import UserDetail from "../components/UserDetail";
import UsersTable from "../components/UsersTable";

const UsersPage: React.FC = () => (
  <Layout title="Users" subtitle="React users app">
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <input className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UsersTable />
        </div>
        <div className="col">
          <UserDetail />
        </div>
      </div>
    </div>
  </Layout>
);

export default UsersPage;
