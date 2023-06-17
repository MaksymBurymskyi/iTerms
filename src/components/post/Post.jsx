import './Post.scss';
import { ReactComponent as FacebookIcon } from '../../imgs/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../imgs/twitter-icon.svg';
import { ReactComponent as PinterestIcon } from '../../imgs/pinterest-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../imgs/linkedin-icon.svg';
import PostsBlock from '../postsBlock/PostsBlock';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Post() {
  // хуки для перекладу i18n
  const [t] = useTranslation(['translation']);
  const [e] = useTranslation(['extraTr']);
  // хуки зберігають інформацію про завантаження посту
  const [postData, setPostData] = useState({});
  const [error, setError] = useState(false);
  // хук отримує ідентифікатор з URL адреси
  const params = useParams();

  // адреса виконання get запиту для отримання блогів
  const urlPostData = `http://localhost:3100/blogs/${params.id}`;

  useEffect(() => {
    axios
      .get(urlPostData)
      .then(({ data }) => {
        setPostData(data);
      })
      .catch(function (error) {
        console.log(error);
        setError(true);
      });
  }, [urlPostData, params]);

  return (
    <div className='page'>
      <section className='post'>
        <div className='container'>
          <div className='post__wrapper'>
            {error ? (
              `${t('error')}`
            ) : (
              <>
                <div className='post__body'>
                  <img src={postData.image} alt={e('mainPage.post.body')} />
                  <h2 className='post__title'>{postData.title}</h2>
                  <div id='description'>
                    <h3>{t('blog.post.description')}</h3>
                    <p>{postData.description}</p>
                  </div>
                  <div className='post__bodyText' id='text'>
                    <h3>{t('blog.post.text')}</h3>
                    <p>{postData.text}</p>
                  </div>
                  <div id='author'>
                    <h3>{t('blog.post.author')}</h3>
                    <div className='post__author'>
                      <div>
                        <p className='post__authorName'>
                          {postData.author?.name}
                        </p>
                        <p className='post__authorPosition'>
                          {postData.author?.position}
                        </p>
                      </div>
                      <div className='post__authorAvatar'>
                        <img
                          src={postData.author?.avatar}
                          alt={e('mainPage.post.author')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className='post__contents'>
              <h2>{t('blog.post.contentsTitle')}</h2>
              <ul>
                <li>
                  <HashLink
                    to={`/blog/${params.id}?cat=${postData.category?.title}#description`}>
                    {t('blog.post.description')}
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to={`/blog/${params.id}?cat=${postData.category?.title}#text`}>
                    {t('blog.post.text')}
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to={`/blog/${params.id}?cat=${postData.category?.title}#author`}>
                    {t('blog.post.author')}
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className='post__socialMedia'>
            {t('blog.post.socialMedia')}:
            <ul>
              <li>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  to='https://www.facebook.com/home'>
                  <FacebookIcon className='post__socialIcon' />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  to='https://twitter.com/home'>
                  <TwitterIcon className='post__socialIcon' />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  to='https://pinterest.com/home'>
                  <PinterestIcon className='post__socialIcon' />
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  to='https://linkedin.com/home'>
                  <LinkedinIcon className='post__socialIcon' />
                </Link>
              </li>
            </ul>
          </div>
          <div className='post__preview'>
            <h2 className='post__title'>{t('blog.post.previewTitle')}</h2>
            <PostsBlock
              addClass={'post__block'}
              category={postData.category?.title}
              quantity={4}
              start={0}></PostsBlock>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Post;
