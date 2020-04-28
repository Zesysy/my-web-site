import PropTypes from "prop-types";

// Line break to differentiate homemade components from others
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import NetlifyFormHidden from "../utils/NetlifyFormHidden";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Footer />
      <NetlifyFormHidden />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
