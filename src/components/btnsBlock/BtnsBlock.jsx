import './BtnsBlock.scss';
import Button from "../button/Button";

import { Link } from 'react-router-dom';

function BtnsBlock({ direction, style, addBtnClass, btnStyle, btnTo, btnText, linkStyle, linkTo, linkText }) {
 
  // Компонент приймає пропси від батьківського елементу і використовує для будови елементів та передачі до дочірнього компоненту Button

  return<>
    <div className={{ direction } === 'column' ? 'column btnsBlock' : 'row btnsBlock'} style={style}>
      <Button addClass={ addBtnClass } style={ btnStyle } to={ btnTo }>{ btnText }</Button>
      <Link className="btnsBlock__link" style={ linkStyle } to={ linkTo }>{ linkText }</Link>
    </div>
  </>
}

export default BtnsBlock;