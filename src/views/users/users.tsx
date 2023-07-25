import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUserAsync } from "./users.slice";
import { Usertable } from "./components";
const UsersView = () => {
  const dispatch = useAppDispatch();
  const usersStore = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, []);

  return (
    <div>
      <h1 className="main-header">User Info</h1>
      <Usertable users={usersStore.users || []} />
    </div>
  );
};
export default UsersView;
