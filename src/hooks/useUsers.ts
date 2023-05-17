import { useState, useEffect } from "react";
import { User } from "../types";

const useUsers = (filter?: string): [users: User[], loading: boolean] => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!filter) {
      setFilteredUsers(users);
    }
    const newUsers = users?.filter((user) => {
      const regex = new RegExp(filter || "", "i");
      return user.email.match(regex) || user.name.match(regex);
    });
    setFilteredUsers(newUsers);
  }, [filter, users]);

  return [filteredUsers, loading];
};

export default useUsers;
