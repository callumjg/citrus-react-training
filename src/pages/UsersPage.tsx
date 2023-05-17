import { useState } from "react";
import Layout from "../components/Layout";
import UserDetail from "../components/UserDetail";
import UsersTable from "../components/UsersTable";

const UsersPage: React.FC = () => {
  const [search, setSearch] = useState("");

  return (
    <Layout title="Users" subtitle="React users app">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
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
};

export default UsersPage;
