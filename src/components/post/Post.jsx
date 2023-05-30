import './Post.scss';

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Post() {

  const [postData, setPostData] = useState({})

  // хук отримує ідентифікатор з URL адреси
  const params = useParams();

  // адреса виконання get запиту для отримання блогів
  const urlPostData = `/blogs/${params.id}`;

  // хук отримує пост з бази даних та зберігає до стейту
  useEffect(() => {
    axios.get(urlPostData).then(({ data }) => {
      setPostData(data);
      // console.log('postData :>> ', postData);
    }).then(() => console.log('post :>> ', postData))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlPostData, params])

  
  
  return <div className='page'>
    <section className='post'>
      <div className="container">
        <div className="post__wrapper">
          <div className="post__body"></div>
          <div className="post__contents"></div>
        </div>
      </div>
    </section>
  </div>
}

export default Post;