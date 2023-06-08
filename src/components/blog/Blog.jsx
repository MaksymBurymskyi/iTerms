/* eslint-disable array-callback-return */
import './Blog.scss';
// import BlogItem from '../blogItem/BlogItem';
import PostsBlock from '../postsBlock/PostsBlock';
import usePagination from '../../hooks/usePagination';
import { ReactComponent as Arrow } from '../../imgs/suffix-left-icon.svg';

import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  // хук для перекладу i18n
  const [t] = useTranslation(['translation']);
  // хуки зберігають інформацію про завантаження постів, виконання фільтру категорій
  const [categories, setCategories] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [totalCategoryCount, setTotalCategoryCount] = useState();

  // кількість постів на сторінці
  const quantity = 9;
  // хук для керування пагінацією
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage:
      filteredBlogs.length > quantity ? quantity : filteredBlogs.length,
    count: filteredBlogs.length,
  });

  // адреса виконання get запиту для отримання блогів
  const urlBlogsData = 'http://localhost:3100/blogs';

  // заповнення масиву категорій
  useEffect(() => {
    axios.get(urlBlogsData).then(({ data }) => {
      const categoriesArr = [];
      const idArr = {};
      data.map(item => {
        const currId = item.category.id;
        if (!idArr[currId]) {
          item.category.count = 1;
          categoriesArr.push(item.category);
          idArr[currId] = true;
        } else {
          categoriesArr.map(obj => {
            if (obj.id === currId) {
              obj.count += 1;
            }
          });
        }
      });
      setCategories(categoriesArr);
    });
  }, []);

  // // повертає перегляд на початок блоку з блогами при зміні сторінки в пагінації
  // useEffect(() => {
  //   window.scrollTo(0, 100);
  // }, [page]);

  // заповнення масиву блогів
  useEffect(() => {
    axios.get(urlBlogsData).then(({ data }) => setBlogsData(data));
  }, []);

  // оновлення стану фільтрів
  useEffect(() => {
    filterByCategory();
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, blogsData]);

  useEffect(() => {
    let count = 0;
    categories.map(item => {
      count += item.count;
    });
    setTotalCategoryCount(count);
  }, [categories]);

  // функція виконує оновлення стану масиву блогів відповідно обраної категорії
  const filterByCategory = () => {
    const filtered =
      filter !== 'All'
        ? blogsData.filter(card => card.category.title === filter)
        : blogsData;
    setFilteredBlogs(filtered);
  };

  // додає клас active до обраної категорії
  function getActiveClass(title) {
    return title === filter ? 'active' : '';
  }

  return (
    <div className='page'>
      <section className='blog'>
        <div className='container'>
          <div className='blog__description'>
            <p className='page__upTitle'>{t('blog.upTitle')}</p>
            <h2 className='page__title'>{t('blog.title')}</h2>
            <p className='blog__subTitle'>{t('blog.subTitle')}</p>
          </div>
          <div className='blog__wrapper'>
            <div className='blog__contents'>
              <h3>{t('blog.contents')}</h3>
              <ul>
                <li
                  className={getActiveClass('All')}
                  onClick={() => {
                    setFilter('All');
                    filterByCategory();
                  }}>
                  All ({totalCategoryCount})
                </li>
                {categories.map(item => (
                  <li
                    className={getActiveClass(item.title)}
                    key={item.id}
                    onClick={() => {
                      setFilter(item.title);
                      filterByCategory();
                    }}>
                    {item.title} ({item.count})
                  </li>
                ))}
              </ul>
            </div>
            <PostsBlock
              category={filter}
              quantity={lastContentIndex}
              start={firstContentIndex}></PostsBlock>
          </div>
          <div className='pagination'>
            <button
              onClick={prevPage}
              className={`pagination__pointer pagination__pointer--prev ${
                page === 1 ? 'disabled' : ''
              }`}>
              <Arrow />
            </button>
            {gaps.before ? '...' : null}
            {gaps.paginationGroup.map(el => (
              <button
                onClick={() => setPage(el)}
                key={el}
                className={`pagination__pointer ${
                  page === el ? 'active' : ''
                }`}>
                {el}
              </button>
            ))}
            {gaps.after ? '...' : null}
            <button
              onClick={nextPage}
              className={`pagination__pointer pagination__pointer--next ${
                page === totalPages ? 'disabled' : ''
              }`}>
              <Arrow />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
