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
  overview,
}) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6 pl-0 mb-3 mt-3 mr-2 border rounded-bottom borderCustom">
        <img
          className="align-left w-md-75 mb-2 ml-1"
          src={overview}
          alt="App overview"
        />
        <div className="ml-2">
          <a href={linkWebSite} target="_blank">
            <FontAwesomeIcon icon={faLink} className="mr-1" /> {title}
          </a>
          <br />
          {linkGithub ? (
            <a href={linkGithub} target="_blank">
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
      </div>
      <style jsx>
        {`
          @media (max-width: 699px) {
            border: none !important;

            img {
              width: 98%;
            }
          }
        `}
      </style>
    </>
  );
};

ProjectStructure.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  linkWebSite: PropTypes.string.isRequired,
  linkGithub: PropTypes.string,
  description: PropTypes.object.isRequired,
  overview: PropTypes.string,
};

export default ProjectStructure;
