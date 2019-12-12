import { Container } from "reactstrap";

import Layout from "../components/structure/Layout";
import ResumeHeader from "../components/resume/ResumeHeader";
import BodyResume from "../components/resume/BodyResume";

const Resume = () => (
  <Layout>
    <Container fluid>
      <ResumeHeader />
      <BodyResume />
    </Container>
  </Layout>
);

export default Resume;
