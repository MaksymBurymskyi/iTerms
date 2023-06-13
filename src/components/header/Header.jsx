import './Header.scss';
import './BurgerBtn.scss';
import LanguageSelector from '../languageSelector/LanguageSelector';
import Button from '../button/Button';
// eslint-disable-next-line no-unused-vars
import i18n from '../../_i18n/i18n';

import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import cn from 'classnames';

export default function Header() {
  // хуки зберігають стан відображення і положення хедеру
  const [hide, setHide] = useState(false);
  const [onTopPosition, setOnTopPosition] = useState(true);
  // хук стану бургера
  const [isBurgerChecked, setIsBurgerChecked] = useState(false);
  const [isMobileLinkShow, setIsMobileLinkShow] = useState(false);

  // хук для відображення тексту залежно від обраної мови
  const [t] = useTranslation(['translation']);

  // хук для відправки значення обраної мови до глобального сховища
  const dispatchFunc = useDispatch();
  // отримання поточної встановленої мови зі сховища
  const currLanguage = useSelector(state => state.language);
  // стан для відображення поточної мови у компоненті
  const [currLang, setCurrLang] = useState('en');

  // хук керування станом поточної мови
  useEffect(() => {
    setCurrLang(currLanguage);
  }, [currLanguage]);

  // хук відповідає за відображення хедеру. Приховує при скролі вниз і показує при скролі уверх
  useEffect(() => {
    let lastScrollTop;

    // функція-обробник скролу сторінки
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setHide(true);
      } else {
        setHide(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      window.pageYOffset > 15
        ? setOnTopPosition(false)
        : setOnTopPosition(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //масив мов на сторінці, передається до компоненту вибору мови для відображення значень
  const languages = ['en', 'uk'];

  // функція зміни мови, керує поведінкою useDispatch для зміни стану у сховищі
  function onChangeLanguage(language) {
    if (language === 'uk') {
      dispatchFunc({ type: 'setUk' });
    } else {
      dispatchFunc({ type: 'setEn' });
    }
    hidesMenu();
  }

  // перевірка ширини екрану для відображення блоків
  const isMobile = useMediaQuery('(max-width:992px)');

  function clickHandler() {
    !isBurgerChecked ? setIsBurgerChecked(true) : setIsBurgerChecked(false);
  }

  function hidesMenu() {
    setIsBurgerChecked(false);
  }

  return (
    <>
      <header
        className={`header ${hide ? 'invisible' : ''} ${
          !onTopPosition ? 'notInTop' : ''
        }`}>
        <div className='container'>
          <div className='header__logo' onClick={hidesMenu}>
            <Link to='/'>iTerms </Link>
          </div>
          <div
            className={`burgerBtn ${
              isMobile ? 'burgerBtn-active' : 'burgerBtn-disable'
            }`}
            onClick={clickHandler}>
            <span className={isBurgerChecked ? 'checked' : 'unchecked'}></span>
            <span className={isBurgerChecked ? 'checked' : 'unchecked'}></span>
            <span className={isBurgerChecked ? 'checked' : 'unchecked'}></span>
          </div>
          <div
            className={cn(
              isMobile ? 'header__mobile' : 'header__menuWrapper',
              isBurgerChecked ? null : 'header__mobile--hidden',
            )}>
            <nav className='header__menu' onClick={hidesMenu}>
              <NavLink
                className={({ isActive }) => (isActive ? 'menuLinkActive' : '')}
                to='/signin'>
                {t('header.header__menu.to-main')}
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'menuLinkActive' : '')}
                to={`/${currLanguage}/contacts`}>
                {t('header.header__menu.to-contacts')}
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'menuLinkActive' : '')}
                to='/pricing'>
                {t('header.header__menu.to-pricing')}
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'menuLinkActive' : '')}
                to='/blog'>
                {t('header.header__menu.to-blog')}
              </NavLink>
            </nav>
            <LanguageSelector
              currLang={currLang}
              options={languages}
              changeOption={onChangeLanguage}
            />
            {isMobile ? (
              <div
                className='header__mobileLinks'
                onClick={() =>
                  isMobileLinkShow
                    ? setIsMobileLinkShow(false)
                    : setIsMobileLinkShow(true)
                }>
                {t('header.header__buttons.account')}
                {isMobileLinkShow && (
                  <div className='header__mobileLinksWrap'>
                    <Link to='/signin' onClick={hidesMenu}>
                      {t('header.header__buttons.to-signin')}
                    </Link>
                    <Link to='/signup' onClick={hidesMenu}>
                      {t('header.header__buttons.to-signup')}
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className='header__buttons'>
                <Link to='/signin'>
                  {t('header.header__buttons.to-signin')}
                </Link>
                <Button
                  addClass={'mainBtn'}
                  style={{ padding: '12px 40px' }}
                  to={'/signup'}>
                  {t('header.header__buttons.to-signup')}
                </Button>
              </div>
            )}
            {isMobile && (
              <div className='header__mobileBgd' onClick={hidesMenu}></div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
