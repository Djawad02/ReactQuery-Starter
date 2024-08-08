import UserListPage from "./UserList";
import { Outlet } from "react-router-dom";

const UsersPages = () => {
  return (
    <div className="row">
      <div className="col">
        <UserListPage />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPages;
