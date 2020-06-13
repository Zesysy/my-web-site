import PropTypes from "prop-types";

const IconCustom = ({ id, size, position, content }) => (
    <i aria-hidden={true} title={id}>
        <svg
            className={`svg-inline--fa fa-null fa-pull-null ${size} ${position}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -20 100 100"
        >
            {content}
        </svg>
    </i>
);

IconCustom.defaultProps = {
    size: "fa-2x",
    position: "",
}

IconCustom.propTypes = {
    title: PropTypes.string,
    size: PropTypes.string,
    position: PropTypes.string,
    content: PropTypes.node
};

export default IconCustom;
