import './PostsBlock.scss';
import BlogItem from '../blogItem/BlogItem';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostsBlock({ category, quantity, start, addClass }) {
  // хуки стану  зберігають пости і категорії
  const [blogsData, setBlogsData] = useState([]);
  const [filter, setFilter] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // індекси для нарізання масиву
  const firstContentIndex = start;
  const lastContentIndex = quantity;

  // адреса виконання get запиту для отримання блогів
  const urlBlogsData = 'http://localhost:3100/blogs';

  useEffect(() => {
    axios.get(urlBlogsData).then(({ data }) => setBlogsData(data));
  }, []);

  useEffect(() => {
    const currCategory = category;
    currCategory ? setFilter(currCategory) : setFilter('All');
  }, [category]);

  useEffect(() => {
    const filtered =
      filter !== 'All'
        ? blogsData.filter(card => card.category.title === filter)
        : blogsData;
    setFilteredBlogs(filtered);
  }, [blogsData, filter]);

  return (
    <>
      <div className={`posts ${addClass}`}>
        {filteredBlogs
          .slice(firstContentIndex, lastContentIndex)
          .map((blog, index) => (
            <BlogItem
              key={index}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              category={blog.category.title}></BlogItem>
          ))}
      </div>
    </>
  );
}

export default PostsBlock;
