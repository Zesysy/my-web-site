import { Container } from "reactstrap";

import Layout from "../components/structure/Layout";
import ResumeHeader from "../components/ResumeHeader";
import BodyResume from "../components/BodyResume";

const Resume = () => (
  <Layout>
    <Container fluid>
      <ResumeHeader />
      <BodyResume />
    </Container>
  </Layout>
);

export default Resume;
