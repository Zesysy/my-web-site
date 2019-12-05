import Head from "./Head";
import NavbarHeader from "./NavbarHeader";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <NavbarHeader />
      {children}
    </>
  );
};
export default Layout;
