import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import UserDetail from "../components/UserDetail";
import UsersTable from "../components/UsersTable";
import Input from "../components/Input";
import { User } from "../types";

const UsersPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[] | undefined>();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .finally(() => setLoading(false));
  }, []);

  const filterUsers = users?.filter((user) => {
    const regex = new RegExp(search, "i");
    return user.email.match(regex) || user.name.match(regex);
  });

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
            {loading ? <p>Loading...</p> : <UsersTable users={filterUsers} />}
          </div>
          <div className="col">
            <UserDetail user={users && users[0]} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UsersPage;
