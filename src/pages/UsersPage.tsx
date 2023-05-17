import { useState } from "react";
import Layout from "../components/Layout";
import UserDetail from "../components/UserDetail";
import UsersTable from "../components/UsersTable";
import Input from "../components/Input";
import useUsers from "../hooks/useUsers";

const UsersPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<number | undefined>();
  const [users, loading] = useUsers(search);

  return (
    <Layout title="Users" subtitle="React users app">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Input value={search} setValue={setSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <UsersTable users={users} selectUserId={setSelectedUserId} />
            )}
          </div>
          <div className="col">
            <UserDetail userId={selectedUserId} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UsersPage;
