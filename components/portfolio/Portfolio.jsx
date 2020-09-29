import { Fragment, useState } from "react";
import { Row } from "reactstrap";

import { items } from "../../data/portfolio.data";
import PaginationCustom from "../structure/PaginationCustom";
import ProjectStructure from "./ProjectStructure";

const PortfolioComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);

  // Get index of card to display only 3 cards per page
  const indexOfLastCard = cardsPerPage * currentPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = items.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // If current card is equal at last card => block paginate
  const nextPage = () => {
    currentPage < Math.ceil(items.length / cardsPerPage)
      ? setCurrentPage(currentPage + 1)
      : false;
  };

  // If current card is equal at first card => block paginate
  const prevPage = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : false;
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = () => {
    setCurrentPage(Math.ceil(items.length / cardsPerPage));
  };

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
          {currentCards.map(
            (
              { title, subtitle, linkWebSite, linkGithub, description },
              key
            ) => (
              <Fragment key={key}>
                <ProjectStructure
                  title={title}
                  subtitle={subtitle}
                  linkWebSite={linkWebSite}
                  linkGithub={linkGithub}
                  description={description}
                />
              </Fragment>
            )
          )}
        </Row>
        <Row className="mt-3 m-0 justify-content-center">
          <PaginationCustom
            cardsPerPage={cardsPerPage}
            totalCards={items.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            firstPage={firstPage}
            lastPage={lastPage}
          />
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
