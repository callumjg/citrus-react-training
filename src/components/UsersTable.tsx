import { User } from "../types";

interface UsersTableProps {
  users?: User[];
  selectUserId?: (userId: number) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, selectUserId }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users?.map((user) => (
        <tr key={user.id} onClick={() => selectUserId && selectUserId(user.id)}>
          <td>{user.id}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UsersTable;
