import './Footer.scss';
import BtnsBlock from "../btnsBlock/BtnsBlock";
import LanguageSelector from '../languageSelector/LanguageSelector';
// eslint-disable-next-line no-unused-vars
import i18n from "../../_i18n/i18n";

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

function Footer() {

  // хук для відправки значення обраної мови до глобального сховища
  const dispatchFunc = useDispatch();
  // отримання поточної встановленої мови зі сховища
  const currLanguage = useSelector((state) => state.language);
  // стан для відображення поточної мови у компоненті
  const [currLang, setCurrLang] = useState('English version')

  // хук керування станом поточної мови
  useEffect(() => {
    currLanguage === 'uk' ? setCurrLang('Українська версія') : setCurrLang('English version');
  }, [currLanguage]);

  const [t] = useTranslation(["translation"]);

  //масив мов на сторінці, передається до компоненту вибору мови для відображення значень
  const languages = ['English version', 'Українська версія']

  // функція зміни мови, керує поведінкою useDispatch для зміни стану у сховищі
  function onChangeLanguage(language) {
    if (language === "Українська версія") {
      dispatchFunc({ type: "setUk" });
    } else {
      dispatchFunc({ type: "setEn" });
    }
  }

  return <div className="footer">
    <div className="container">
      <div className="footer__conversion">
        <p className="footer__conversionUpTitle">
          { t('footer.footer__conversionUpTitle') }
        </p>
        <h2 className="footer__conversionTitle">
          { t('footer.footer__conversionTitle') }
        </h2>
        <p className="footer__conversionSubTitle">
          { t('footer.footer__conversionSubTitle') }
        </p>
        <BtnsBlock
          style={{ justifyContent: 'center'}}
          direction={'row'}
          addBtnClass={'mainBtn'}
          btnStyle={{ padding: "12px 32px" }}
          btnTo={'/signup'}
          btnText={ t('footer.BtnsBlock.btnText') }
          linkStyle={{ padding: "12px 4px 12px 16px" }}
          linkTo={"/pricing"}
          linkText={ t('footer.BtnsBlock.linkText') }
        >       
          </BtnsBlock>
      </div>
      <div className="footer__mainLinks">
        <div className="footer__textBlock">
          <h3>iTerms</h3>
          <p>
            { t('footer.footer__textBlock') }
          </p>
        </div>
        <div className="footer__linksBlock">
          <ul className="footer__linkList footer__linkList--row">
            <li>
              <h4>{ t('footer.footer__linksBlock.Company') }</h4>
              <ul className="footer__linkList footer__linkList--column">
                <li><Link to="/">{ t('footer.footer__linkList.Company', { returnObjects: true })[0] }</Link></li>
                <li><Link to="/">{ t('footer.footer__linkList.Company', { returnObjects: true })[1] }</Link></li>
                <li><Link to="/">{ t('footer.footer__linkList.Company', { returnObjects: true })[2] }</Link></li>
                <li><Link to="/">{ t('footer.footer__linkList.Company', { returnObjects: true })[3] }</Link></li>
              </ul>
              
            </li>
            <li>
              <h4>{ t('footer.footer__linksBlock.Products') }</h4>
              <ul className="footer__linkList footer__linkList--column">
                <li><Link to="/">{ t('footer.footer__linkList.Products', { returnObjects: true })[0] }</Link></li>
                <li><Link to="/">{ t('footer.footer__linkList.Products', { returnObjects: true })[1] }</Link></li>
                <li><Link to="/">{ t('footer.footer__linkList.Products', { returnObjects: true })[2] }</Link></li>
                <li><Link to="/">{ t('footer.footer__linkList.Products', { returnObjects: true })[3] }</Link></li>
              </ul>
              
            </li>
            <li>
              <h4>{ t('footer.footer__linksBlock.Support') }</h4>
              <ul className="footer__linkList footer__linkList--column">
                <li><Link to="/">{ t('footer.footer__linkList.Support', { returnObjects: true })[0] }</Link></li>
                <li><Link to="/">{ t('footer.footer__linkList.Support', { returnObjects: true })[1] }</Link></li>
                <li><Link to="/">{ t('footer.footer__linkList.Support', { returnObjects: true })[2] }</Link></li>
                <li><Link to="/">{ t('footer.footer__linkList.Support', { returnObjects: true })[3] }</Link></li>
              </ul>
              
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__infoLinks">
        <span>© 2023 Terms Inc. { t("footer.footer__infoLinks.rights") }</span>
        <ul className="footer__linkList footer__linkList--row">
          <li><Link to="/pricing">{ t("footer.footer__infoLinks.linkList.to-pricing") }</Link></li>
          <li><Link to="/">{ t("footer.footer__infoLinks.linkList.to-policy") }</Link></li>
          <li><Link to="/">{ t("footer.footer__infoLinks.linkList.to-disclaimer") }</Link></li>
          <li>
            <LanguageSelector
          currLang={ currLang }
          options={ languages }
          changeOption={ onChangeLanguage } />
          </li>
        </ul>
      </div>
    </div>
  </div>

}

export default Footer;