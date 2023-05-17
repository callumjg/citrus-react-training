import { User } from "../types";

interface UserDetailProps {
  user?: User;
}
const UserDetail: React.FC<UserDetailProps> = ({ user }) =>
  user ? (
    <div>
      <h3>{user?.name}</h3>
      <div>ID: {user?.id}</div>
      <div>Email: {user?.email}</div>
      <div>Phone: {user?.phone}</div>
    </div>
  ) : (
    <p>Not found</p>
  );

export default UserDetail;
