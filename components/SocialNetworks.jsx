import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const SocialNetworks = ({ size }) => {
  const items = [
    { link: "https://github.com/Zesysy", logo: faGithubSquare },
    { link: "https://gitlab.com/Zesysy", logo: faGitlab },
    { link: "https://www.linkedin.com/in/sylene-manusset/", logo: faLinkedin },
  ];

  return (
    <>
      {items.map((item, key) => (
        <a key={key} className="mr-2 ml-2" href={item.link} target="_blank">
          <FontAwesomeIcon
            icon={item.logo}
            size={size}
            color="var(--success)"
            className="linkSocialNetwork"
          />
        </a>
      ))}
      {size === "3x" ? (
        <style>
          {`
            .linkSocialNetwork:hover {
              color: var(--secondary) !important;
            }
          `}
        </style>
      ) : null}
    </>
  );
};

SocialNetworks.propTypes = {
  size: PropTypes.string,
};

export default SocialNetworks;
