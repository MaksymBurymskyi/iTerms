import "./Header.scss";
import Selector from "../selector/Selector";
import Button from "../button/Button";

import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from "react";

export default function Header() {

  //масив мов на сторінці, передається до компоненту вибору мови
  const languages = ['en', 'uk'];
  
  //хуки зберігають стан відображення і положення хедеру
  const [hide, setHide] = useState(false);
  const [onTopPoxition, setOnTopPoxition] = useState(true)

  //хук відповідає за відображення хедеру. Приховує при скролі вниз і показує при скролі уверх
  useEffect(() => {
  
    let lastScrollTop;
    
    //функція-обробник скролу сторінки
    const handleScroll = () => {

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setHide(true);
      } else {
        setHide(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      window.pageYOffset > 15 ? setOnTopPoxition(false) : setOnTopPoxition(true);
    };
  
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>
    <header className={`header ${hide && "invisible"} ${!onTopPoxition && "notInTop"}`}>
      <div className="container">
        <div className="header__logo">
          <NavLink  to="/">iTerms </NavLink>
        </div>
        <nav className="header__menu">
          <NavLink to="/">Generate</NavLink>
          <NavLink to="/contacts">Contact us</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
        <Selector
          label={''}
          options={languages}
        />
        <div className="header__buttons">
          <NavLink to="/signin">Log in</NavLink>
          <Button addClass={'mainBtn'} style={{ padding: "12px 40px" }} to={'/signup'}>Sign up</Button>
        </div>
      </div>
    </header>
  </>
}