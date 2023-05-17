import { User } from "../types";

interface UsersTableProps {
  users?: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => (
  <div>{users?.length}</div>
);

export default UsersTable;
