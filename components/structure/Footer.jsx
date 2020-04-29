import { useRouter } from "next/router";
import { Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import SocialNetworks from "../SocialNetworks";

const Footer = () => {
  const router = useRouter();

  // Display condition according to the current path
  return (
    <>
      {router.pathname !== "/" ? (
        <footer>
          <Row className="justify-content-center m-0">
            <SocialNetworks size="2x" />
          </Row>
        </footer>
      ) : (
        <footer>
          <Row className="justify-content-center m-0">
            <i className="m-2">
              <FontAwesomeIcon
                icon={faCopyright}
                className="align-middle"
                color="gray"
                size="2x"
              />
              Sylène Manusset | 2019
            </i>
          </Row>
        </footer>
      )}
      <style>
        {`
              footer {
                width: 100%;
                height: 4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--info);
              }
            `}
      </style>
    </>
  );
};

export default Footer;
