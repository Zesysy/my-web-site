import { Container } from "reactstrap";

import Layout from "../components/structure/Layout";
import PortfolioComponent from "../components/Portfolio.component";

const Portfolio = () => (
  <Layout>
    <Container fluid>
      <PortfolioComponent />
    </Container>
  </Layout>
);

export default Portfolio;
