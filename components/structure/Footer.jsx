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
        {router.pathname === "/portfolio" ? (
          <style>
            {`
              @media (min-width: 800px) {
                footer {
                  top: 100%;
                  bottom: 0;
                  height: 51px;
                  left: 0;
                  right: 0;
                }
              }
              footer {
                background-color: var(--info);
              }
            `}
          </style>
        ) : (
          <style>
            {`
              @media (min-width: 800px) {
                footer {
                  position: fixed;
                  bottom: 0;
                  left: 0;
                  right: 0;
                }
              }
              footer {
                text-align: center;
                background-color: var(--info);
              }
            `}
          </style>
        )}
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
        <style>
          {`
            @media (min-width: 800px) {
              footer {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
              }
            }
            footer {
              text-align: center;
              background-color: var(--info);
            }
          `}
        </style>
      </>
    );
  }
};

export default Footer;
