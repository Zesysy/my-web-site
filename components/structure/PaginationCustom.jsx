import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";

const PaginationCustom = ({
  cardsPerPage,
  totalCards,
  paginate,
  nextPage,
  prevPage,
  firstPage,
  lastPage,
}) => {
  const pageNumbers = [];

  // Create an array to use map()
  for (let i = 1; i < Math.ceil(totalCards / cardsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink
          data-toggle="tooltip"
          title="First page"
          onClick={() => firstPage()}
          first
          href="#"
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          data-toggle="tooltip"
          data-placement="top"
          title="Previous page"
          onClick={() => prevPage()}
          previous
          href="#"
        />
      </PaginationItem>
      {pageNumbers.map((num, key) => (
        <PaginationItem key={key}>
          <PaginationLink onClick={() => paginate(num)} href="#">
            {num}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink
          data-toggle="tooltip"
          data-placement="top"
          title="Next page"
          onClick={() => nextPage()}
          next
          href="#"
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          onClick={() => lastPage()}
          data-toggle="tooltip"
          data-placement="top"
          title="Last page"
          last
          href="#"
        />
      </PaginationItem>
    </Pagination>
  );
};

PaginationCustom.propTypes = {
  cardsPerPage: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  firstPage: PropTypes.func.isRequired,
  lastPage: PropTypes.func.isRequired,
};

export default PaginationCustom;
