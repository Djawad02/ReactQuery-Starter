import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main"></div>
      <Outlet />
    </>
  );
};

export default Layout;
