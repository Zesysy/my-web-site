import PropTypes from "prop-types";

const MainWrapper = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          width: 100%;
          min-height: calc(100vh - 7.5rem);
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      </style>
    </>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
