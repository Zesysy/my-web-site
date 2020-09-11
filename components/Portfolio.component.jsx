import { Row } from "reactstrap";

import { items } from "../data/portfolio.data";

const PortfolioComponent = () => {
  return (
    <>
      <section>
        <Row className="mt-3 m-0 flex-column align-items-center">
          <h2>Portfolio</h2>
          <p className="warningParagraph">
            Cliquez sur les noms des projets pour accéder au site ou à un
            apperçu.
          </p>
        </Row>
        <Row className="mt-3 m-0 justify-content-center">
          {items.map(({ title, subtitle, link, description }, key) => (
            <div
              className="col-lg-3 col-sm-6 mb-3 mt-3 mr-1 border rounded-bottom borderCustom"
              key={key}
            >
              <a href={link} target="_blank">
                {title}
              </a>
              <p className="d-none d-md-block">
                Technologies : <br />
                {subtitle}
              </p>
              {description}
            </div>
          ))}
        </Row>
      </section>
      <style jsx>
        {`
          .warningParagraph {
            color: var(--warning);
          }

          .borderCustom {
            border-color: #4aa9a9 !important;
          }

          @media (max-width: 699px) {
            border: none !important;
          }
        `}
      </style>
    </>
  );
};

export default PortfolioComponent;
