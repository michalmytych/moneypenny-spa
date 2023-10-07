import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
  return (
    <>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
