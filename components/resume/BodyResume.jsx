import { Row, Col } from "reactstrap";

import Experiences from "./Experiences";
import Qualifications from "./Qualifications";
import Skills from "./Skills";
import Hobbies from "./Hobbies";

const BodyResume = () => {
  return (
    <section>
      <Row className="justify-content-between ml-2 m-0">
        <Col lg="6">
          <Experiences />
        </Col>
        <Col lg="6">
          <Qualifications />
        </Col>
      </Row>
      <Row className="justify-content-between ml-2 m-0 mt-4">
        <Col lg="6">
          <Skills />{" "}
        </Col>
        <Col lg="6">
          <Hobbies />{" "}
        </Col>
      </Row>
      <Row className="m-2 justify-content-end">
        <a
          tag="button"
          className="btn btn-secondary float-right mr-4"
          href="/static/myCv.pdf"
          target="_blank"
        >
          Téléchargez au format pdf
        </a>
      </Row>
    </section>
  );
};

export default BodyResume;
