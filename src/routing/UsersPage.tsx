import useAuth from "./hooks/useAuth";
import UserListPage from "./UserList";
import { Navigate, Outlet } from "react-router-dom";

const UsersPages = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
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
