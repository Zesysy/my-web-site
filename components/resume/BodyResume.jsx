import { Row, Col } from "reactstrap";

import Experiences from "./Experiences";
import Qualifications from "./Qualifications";
import Skills from "./Skills";
import Hobbies from "./Hobbies";

const BodyResume = () => {
  return (
    <section>
      <Row className="justify-content-between ml-2">
        <Col lg="6">
          <Experiences />
        </Col>
        <Col lg="6">
          <Qualifications />
        </Col>
      </Row>
      <Row className="justify-content-between ml-2 mt-5">
        <Col lg="6">
          <Skills />
        </Col>
        <Col lg="6">
          <Hobbies />
        </Col>
      </Row>
      <Row className="m-2 justify-content-end mt-5">
        <a
          tag="button"
          className="btn btn-secondary float-right mr-4"
          href="/static/myCv.pdf"
          target="_blank"
        >
          Téléchargez mon CV
        </a>
      </Row>
    </section>
  );
};

export default BodyResume;
