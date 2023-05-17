import "./Button.scss";

import { Link } from 'react-router-dom';


export default function Button({ children, addClass, style, to, icon }) {

  // в залежності від отриманого пропса {to}, компонент повертає кнопку або посилання.
  // Стилі і відображений зміст кнопки також динамічно змінюється в залежності від отриманих параметрів.
  // Є можливість отримання інлайнових стилів, що підвищує гнучкість відображення без необхідності створення багатьох додаткових класів.
  return to ? <Link to={to}>
    <button 
      className= {`${addClass} button`} type='button'
      style={style}>{icon} {children}
    </button>
  </Link> : <button type='submit'
    className={`${addClass} button`}
    style={style}>{icon} {children}
  </button> ;
}