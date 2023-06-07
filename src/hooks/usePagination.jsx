import { useState, useEffect } from "react";

const usePagination = ({ contentPerPage, count }) => {

  const [page, setPage] = useState(1);

  // стан для відображення крапок в ряду пагінації
  const [gaps, setGaps] = useState({
    before: false,
    paginationGroup: [],
    after: true,
  });
  // сторінки для розрахунку відображення між стрілками пагінації
  const [pagesInBetween, setPagesInBetween] = useState([]);

  // загальна кількість сторінок
  const pageCount = Math.ceil(count / contentPerPage);
  // індекс останнього елементу сторінки
  const lastContentIndex = page * contentPerPage;
  // індекс першого елементу сторінки
  const firstContentIndex = lastContentIndex - contentPerPage;

  useEffect(() => {
    if (pageCount) {
      const temp = new Array(pageCount).fill(1).map((_, i) => i + 1 );
      setPagesInBetween(temp);
    }
  }, [pageCount]);

  // керує станом для відображення крапок в ряду пагінації
  useEffect(() => {
    const currentLocation = pagesInBetween.indexOf(page);
    let paginationGroup = [];
    let before = false;
    let after = false;
    if (page === 1) {
      paginationGroup = pagesInBetween.slice(0, 3);
    }
    else if (
      page === pageCount ||
      page === pageCount - 1
      ) {
        paginationGroup = pagesInBetween.slice(-3, pageCount);
    } else {
      paginationGroup = [page - 1, page, page + 1];
    }
    if (pageCount <= 3) {
      before = false;
      after = false;
    } else {
      before = false;
      after = false;
      if (currentLocation > 1 && pageCount > 3) {
        before = true;
      }
      if (paginationGroup[1] < pageCount - 1) {
        after = true;
      }
    }
    setGaps({ paginationGroup, before, after });
  }, [page, pagesInBetween, pageCount]);

  // функція змінює поточну сторінку при переключенні
  const changePage = (direction) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  // функція встановлює сторінки до стану
  const setCurrPage = (num) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setCurrPage,
    firstContentIndex,
    lastContentIndex,
    page,
    gaps,
  };
};

export default usePagination;