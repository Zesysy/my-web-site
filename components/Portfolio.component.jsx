import { Row, Col } from "reactstrap";

import Card from "./utils/Card";
import { items } from "../data/portfolio.data";

const PortfolioComponent = () => {
  return (
    <section>
      <Row className="mt-3 m-0">
        {items.map(
          ({ title, subtitle, preview, link, description, sm }, key) => (
            <Col lg="3" md="6" className="mb-3 mt-3 " key={key}>
              <Card
                title={title}
                subtitle={subtitle}
                preview={preview}
                link={link}
                description={description}
                sm={sm}
              />
            </Col>
          )
        )}
      </Row>
    </section>
  );
};

export default PortfolioComponent;
