import { Row, Col } from "reactstrap";

import TypeWriter from "./TypeWriter";
import SocialNetworks from "./SocialNetworks";

const About = () => {
  return (
    <>
      <section
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)"
        }}
      >
        <Row className="m-0 justify-content-center">
          <Col lg="4" className="m-3">
            <TypeWriter />
            <p className="textHomePage">
              Il y a un an j'ai changé de direction. J'ai lâché mes aiguilles et
              raccroché ma blouse pour un nouveau défi! Après neuf mois de
              formation à la Wild Code School, je suis à la recherche d'une
              opportunité en tant que développeuse Web.
            </p>
          </Col>
          <img src="/static/images/myPicture.webp" alt="Ma photo" />
        </Row>
        <Row className="justify-content-center m-0">
          <SocialNetworks size="3" />
        </Row>
      </section>
      <style jsx>
        {`
          .textHomePage {
            font-size: 1.2em;
            text-align: justify;
          }
        `}
      </style>
    </>
  );
};

export default About;
