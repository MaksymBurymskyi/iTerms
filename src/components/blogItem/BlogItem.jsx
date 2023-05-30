import './BlogItem.scss';

import { Link } from 'react-router-dom';

export default function BlogItem({ id, title, description, category }) {
  
  return <>
    <div className='blogItem' key={ id } >
      <div className="blogItem__canvas">
        <span className='blogItem__category'>{ category}</span>
      </div>
      <div className='blogItem__description'>
        <h4>{ title }</h4>
        <p>
          { description }
        </p>
      </div>
      <Link className='blogItem__link' to={`/blog/${id}`}>Read more<span></span></Link>
    </div>
  </>
}