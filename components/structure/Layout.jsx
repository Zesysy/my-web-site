import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Line break to differentiate homemade components from others
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
