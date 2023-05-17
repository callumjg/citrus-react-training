import { User } from "../types";

interface UsersTableProps {
  users?: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users?.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UsersTable;
