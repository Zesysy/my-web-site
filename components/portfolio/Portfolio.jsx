import { Fragment } from "react";
import { Row } from "reactstrap";

import { items } from "../../data/portfolio.data";
import ProjectStructure from "./ProjectStructure";

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
            <Fragment key={key}>
              <ProjectStructure
                title={title}
                subtitle={subtitle}
                link={link}
                description={description}
              />
            </Fragment>
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
