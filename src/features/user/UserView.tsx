import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { fetchUsers } from "./userSlice";

export default function UserView() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const isLoading = useAppSelector((state) => state.user.loading);
  const error = useAppSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div style={{ marginTop: "10px" }}>
      {isLoading && <div>Loading...</div>}
      {error && !isLoading && <div>{error}</div>}
      {users?.length > 0 &&
        !isLoading &&
        !error &&
        users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
}
