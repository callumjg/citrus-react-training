import { useState, useEffect } from "react";
import { User } from "../types";

const useUser = (
  id: number | undefined
): [user: User | undefined, loading: boolean] => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    if (!id) {
      setUser(undefined);
      return;
    }
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((user) => setUser(user))
      .finally(() => setLoading(false));
  }, [id]);

  return [user, loading];
};

export default useUser;
