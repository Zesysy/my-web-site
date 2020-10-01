import { Container } from "reactstrap";

import Layout from "../components/structure/Layout";
import PortfolioComponent from "../components/portfolio/Portfolio";

const Portfolio = () => (
  <Layout>
    <Container fluid>
      <PortfolioComponent />
    </Container>
  </Layout>
);

export default Portfolio;
