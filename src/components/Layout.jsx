// Components
import Nav from "./Nav";

// React Router
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
