import { useRouter } from "next/router";
import { Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import SocialNetworks from "../SocialNetworks";

const Footer = () => {
  const router = useRouter();

  if (router.pathname !== "/") {
    // display condition according to the current path
    return (
      <>
        <footer>
          <Row className="justify-content-center m-0">
            <SocialNetworks size="2x" />
          </Row>
        </footer>
        <style jsx>
          {`
            footer {
              background-color: var(--info);
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
            }
          `}
        </style>
      </>
    );
  } else {
    return (
      <>
        <footer>
          <Row className="justify-content-center m-0">
            <i className="m-2">
              <FontAwesomeIcon
                icon={faCopyright}
                className="align-middle"
                color="gray"
                size="2x"
              />{" "}
              Sylène Manusset | 2019
            </i>
          </Row>
        </footer>
        <style jsx>
          {`
            footer {
              text-align: center;
              background-color: var(--info);
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
            }
          `}
        </style>
      </>
    );
  }
};

export default Footer;
