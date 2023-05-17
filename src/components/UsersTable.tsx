import { User } from "../types";

interface UsersTableProps {
  users?: User[];
  selectUser?: (u: User) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, selectUser }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users?.map((user) => (
        <tr key={user.id} onClick={() => selectUser && selectUser(user)}>
          <td>{user.id}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UsersTable;
