import './BlogItem.scss';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function BlogItem({ id, title, description, category }) {
  const [t] = useTranslation(['translation']);

  return (
    <>
      <div className='blogItem' key={id}>
        <div className='blogItem__canvas'>
          <span className='blogItem__category'>{category}</span>
        </div>
        <div className='blogItem__description'>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <Link className='blogItem__link' to={`/blog/${id}?${category}`}>
          {t('blog.innerItem.link')}
          <span></span>
        </Link>
      </div>
    </>
  );
}
