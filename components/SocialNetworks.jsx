import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faGitlab
} from "@fortawesome/free-brands-svg-icons";

const SocialNetworks = ({ size }) => {
  const items = [
    { link: "https://github.com/Zesysy", logo: faGithubSquare },
    { link: "https://gitlab.com/Zesysy", logo: faGitlab },
    { link: "https://www.linkedin.com/in/sylene-manusset/", logo: faLinkedin }
  ];

  return (
    <>
      {items.map((item, key) => (
        <a
          key={key}
          className="m-2 linkSocialNetwork"
          href={item.link}
          target="_blank"
        >
          <FontAwesomeIcon icon={item.logo} size={size} color="gray" />
        </a>
      ))}
      {size === "3x" ? (
        <style>
          {`
            .linkSocialNetwork:hover {
              color: var(--info) !important;
              text-decoration: none;
            }
          `}
        </style>
      ) : (
        <style>
          {`
            .linkSocialNetwork:hover {
              text-decoration: none;
            }
          `}
        </style>
      )}
    </>
  );
};

export default SocialNetworks;
