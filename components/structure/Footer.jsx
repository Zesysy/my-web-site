import { useRouter } from "next/router";
import { Row } from "reactstrap";

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
              height: 47px;
            }
          `}
        </style>
      </>
    );
  } else {
    return (
      // TODO : review footer's height
      <>
        <footer>
          <Row className="justify-content-center m-0">
            <p>Sylène Manusset | 2019</p>
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
              height: 47px;
            }
            p {
              position: absolute;
            }
          `}
        </style>
      </>
    );
  }
};

export default Footer;
