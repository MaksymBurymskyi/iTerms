import "./Header.scss";
import Selector from "../selector/Selector";
import Button from "../button/Button";
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from "react";

export default function Header() {

  const [hide, setHide] = useState(false);
  const languages = ['en', 'uk'];
   

  useEffect(() => {
  
    let lastScrollTop;
    
    const handleScroll = () => {
 
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setHide(true);
    } else {
      setHide(false);
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
  
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>
    <header className={`header ${hide && "invisible"}`}>
      <div className="container">
        <div className="header__logo">
          <NavLink  to="/main">iTerms </NavLink>
        </div>
        <nav className="header__menu">
          <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="/main">Generate</NavLink>
          <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="/contacts">Contact us</NavLink>
          <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="/pricing">Pricing</NavLink>
          <NavLink className={({ isActive }) => isActive ? "linkActive" : ""} to="/blog">Blog</NavLink>
        </nav>
        <Selector
          label={''}
          options={languages}
        />
        <div className="header__buttons">
          <NavLink to="/signin">Log in</NavLink>
          <Button style={{ padding: "12px 40px", fontSize: "16px", lineHeight: "150%" }} to={'/signup'}>Sign up</Button>
        </div>
      </div>
    </header>
  </>
}