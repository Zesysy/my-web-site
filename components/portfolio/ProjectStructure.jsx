import PropTypes from "prop-types";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectStructure = ({
  title,
  subtitle,
  linkWebSite,
  linkGithub,
  description,
}) => {
  return (
    <div className="col-lg-3 col-sm-6 mb-3 mt-3 mr-1 border rounded-bottom borderCustom">
      <a href={linkWebSite} target="_blank">
        <FontAwesomeIcon icon={faLink} className="mr-1" /> {title}
      </a>
      <br />
      {linkGithub ? (
        <a href={linkWebSite} target="_blank">
          <FontAwesomeIcon icon={faGithub} className="mr-1" /> Github
        </a>
      ) : (
        false
      )}
      <p className="d-none d-md-block mt-2">
        Technologies : <br />
        {subtitle}
      </p>
      {description}
    </div>
  );
};

ProjectStructure.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  linkWebSite: PropTypes.string.isRequired,
  linkGithub: PropTypes.string,
  description: PropTypes.object.isRequired,
};

export default ProjectStructure;
