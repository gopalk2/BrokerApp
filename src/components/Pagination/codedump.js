import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import './style.css';
import Button from '../Buttons/Button';

const Pagination = props => {
  const { totalPages, currentPage, onChangePage } = props;
  const [inputPage, setInputPage] = useState(1);
  const maxDisplayedPages = 5;

  const goToPage = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onChangePage(pageNumber);
    }
  };

  const handleInputPageChange = event => {
    setInputPage(event.target.value);
  };

  const goToPageNumHandler = () => {
    if (inputPage > 0 && inputPage <= totalPages) {
      goToPage(inputPage);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const paginationItems = [];

    const backArrowActive = currentPage > 1;
    const backwardArrow = (
      <div
        className={
          backArrowActive ? 'active pagination-arrow' : 'pagination-arrow'
        }
      >
        <span key='backward' onClick={goToPreviousPage}>
          <FaAngleLeft className={`pagination-icon`} />
        </span>
      </div>
    );
    paginationItems.push(backwardArrow);

    if (totalPages <= maxDisplayedPages) {
      for (let i = 1; i <= totalPages; i++) {
        const pageLink = (
          <div
            key={i}
            className={
              i === currentPage || inputPage === i
                ? 'active pagination-number'
                : 'pagination-number'
            }
          >
            <span
              key={i}
              className={
                i === currentPage || inputPage === i
                  ? 'active pagination-text'
                  : 'pagination-text'
              }
              onClick={() => goToPage(i)}
            >
              {i}
            </span>
          </div>
        );
        paginationItems.push(pageLink);
      }
    } else {
      let start = 1;
      let end = maxDisplayedPages;

      if (currentPage > Math.ceil(maxDisplayedPages / 2)) {
        start = currentPage - Math.floor(maxDisplayedPages / 2);
        end = currentPage + Math.ceil(maxDisplayedPages / 2) - 1;

        if (end > totalPages) {
          end = totalPages;
          start = end - maxDisplayedPages + 1;
        }
      }

      if (start > 1) {
        const firstPageLink = (
          <span key='first' onClick={() => goToPage(1)}>
            1
          </span>
        );
        paginationItems.push(firstPageLink);

        if (start > 2) {
          const ellipsis = <span key='startEllipsis'>...</span>;
          paginationItems.push(ellipsis);
        }
      }

      for (let i = start; i <= end; i++) {
        const pageLink = (
          <span
            key={i}
            className={i === currentPage ? 'active' : ''}
            onClick={() => goToPage(i)}
          >
            {i}
          </span>
        );
        paginationItems.push(pageLink);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          const ellipsis = <span key='endEllipsis'>...</span>;
          paginationItems.push(ellipsis);
        }

        const lastPageLink = (
          <span key='last' onClick={() => goToPage(totalPages)}>
            {totalPages}
          </span>
        );
        paginationItems.push(lastPageLink);
      }
    }
    const forwardArrowActive = currentPage < totalPages;
    const forwardArrow = (
      <div
        className={
          forwardArrowActive ? 'active pagination-arrow' : 'pagination-arrow'
        }
      >
        <span key='forward' onClick={goToNextPage}>
          <FaAngleRight className={`pagination-icon`} />
        </span>
      </div>
    );
    paginationItems.push(forwardArrow);

    const inputPagination = (
      <div className='pagination-input-div'>
        <label className='input-field-text'>Go To Page</label>
        <input
          type='number'
          className='pagination-input'
          value={inputPage}
          onChange={handleInputPageChange}
        ></input>

        <Button
          type='button'
          onClick={goToPageNumHandler}
          label='Go'
          className='go-button'
        />
      </div>
    );
    paginationItems.push(inputPagination);

    return paginationItems;
  };

  return <div className='pagination-container'>{renderPagination()}</div>;
};

export default Pagination;
