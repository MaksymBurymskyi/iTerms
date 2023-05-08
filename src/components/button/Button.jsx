import "./Button.scss";

import { Link } from 'react-router-dom';


export default function Button({ children, style, to, icon }) {

  return to ? <Link to={to}>
    <button 
      className="button" type='button'
      style={style}>{icon} {children}
    </button>
  </Link> : <button type='submit'
    className="button"
    style={style}>{icon} {children}
  </button> ;
}