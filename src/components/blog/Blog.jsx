/* eslint-disable array-callback-return */
import "./Blog.scss";
import BlogItem from "../blogItem/BlogItem";

import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import axios from 'axios';
// import { Link } from 'react-router-dom';

function Blog() {

  const [t] = useTranslation(["translation"]);

  const [categories, setCategories] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [filter, setFilters] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  //адреса виконання get запиту для отримання блогів
  const urlBlogsData = "http://localhost:3100/blogs";

  // заповнення масиву категорій
  useEffect(() => {
    axios.get(urlBlogsData).then(({ data }) => {
      const categoriesArr = [];
      const idArr = [];
      data.map((item) => {
        if (!idArr.includes(item.category.id)) {
          categoriesArr.push(item.category)
          idArr.push(item.category.id)
        }               
      })
      setCategories(categoriesArr)
    })
  }, [])

  // заповнення масиву блогів
  useEffect(() => {
    axios.get(urlBlogsData).then(({ data }) => setBlogsData(data))
  }, [])

  // оновлення стану фільтрів
  useEffect(() => {
    filterByCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, blogsData]);
  
  // функція виконує оновлення стану масиву блогів відповідно обраної категорії
  const filterByCategory = () => {
    const filtered = filter !== 'All' ? blogsData.filter((card) => card.category.title === filter) : blogsData;
    setFilteredBlogs(filtered);
  }

  // Додає клас active до обраної категорії
  function getActiveClass(title) {
    return title === filter ? 'active' : ''; 
  }
  
  return <div className="page">
    <section className="blog">
      <div className="container">
        <div className="blog__description">
          <p className="page__upTitle">{ t('blog.upTitle') }</p>
          <h2 className="page__title">{ t('blog.title') }</h2>
          <p className="blog__subTitle">{ t('blog.subTitle') }</p>
        </div>
        <div className="blog__wrapper">
          <div className="blog__contents">
            <h3>
              {t('blog.contents')}
            </h3>
            <ul onClick={(ev) => {  
              setFilters(ev.target.innerText);
              filterByCategory()}}>
              <li className={getActiveClass('All')}>All</li>
                {categories.map((item) => <li className={getActiveClass(item.title)} key={item.id}>{item.title}</li>)}
            </ul>
          </div>
          <div className="blog__articles">
            {filteredBlogs.map((blog, index) =>
              <BlogItem
              key = {index} 
              id = {blog.id} 
              title = {blog.title}
              description = {blog.description}
              category = {blog.category.title}
              >   
              </BlogItem>            
            )}
          </div>
        </div>
      </div>
    </section>
  </div>
}

export default Blog;