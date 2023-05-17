import useUser from "../hooks/useUser";

interface UserDetailProps {
  userId?: number;
}
const UserDetail: React.FC<UserDetailProps> = ({ userId }) => {
  const [user, loading] = useUser(userId);
  return loading ? (
    <p>Loading...</p>
  ) : user ? (
    <div>
      <h3>{user?.name}</h3>
      <div>ID: {user?.id}</div>
      <div>Email: {user?.email}</div>
      <div>Phone: {user?.phone}</div>
    </div>
  ) : null;
};

export default UserDetail;
