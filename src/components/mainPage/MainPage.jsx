import './MainPage.scss';
import BtnsBlock from "../btnsBlock/BtnsBlock";
import HeroImage from "../imgsForComponents/mainPage/hero-image.svg";
import LineGrey from "../imgsForComponents/mainPage/line-gray.svg";
import LineViolet from "../imgsForComponents/mainPage/line-violet.svg";
import PaperPlane from "../imgsForComponents/mainPage/paper-plane.svg";
import Document from "../imgsForComponents/mainPage/document.svg";
import Cookie from "../imgsForComponents/mainPage/cookie.svg";
import Lock from "../imgsForComponents/mainPage/lock.svg";
import ContentImage from "../imgsForComponents/mainPage/content-image.svg"

// import axios from 'axios';
// import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function MainPage() {

  const [t] = useTranslation(["translation"]);

  // const [smth, setSmth] = useState('');

  // useEffect(() => {
  //   axios.get("http://localhost:3100").then(({ data }) => {
  //     setSmth(data);
  //     console.log('data :>> ', data);
  //   })
  // }, [])

  // useEffect(() => {
  //   async function trySmth () {
  //     try {
  //       let response = await axios.get("http://localhost:3100");
  //       console.log(response);
  //       return response;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } ;
  // },[])
  
  //  {/* <div>{smth.map((item, index) => (
  //         <div key={index}>{item}</div>
  //       ))} </div> */}
  //   {/* <div>{ smth}</div>  */}
  
  return <div className='mainPage'>
    <section className='mainSection' id='mainSection'>
      <div className="container">
        <div className="heroText">
          <p className="mainPage__upTitle">{ t('mainPage.mainSection.heroText__upTitle') }</p>
          <h1 className="mainPage__title">{ t('mainPage.mainSection.heroText__title') }</h1>
          <p className="heroText__subTitle">
            {t('mainPage.mainSection.heroText__subTitle', { returnObjects: true })[0]}
            <span className="heroText__subTitle--highlighted"> {t('mainPage.mainSection.heroText__subTitle', { returnObjects: true })[1]} </span>
            {t('mainPage.mainSection.heroText__subTitle', { returnObjects: true })[2]} 
            <span className="heroText__subTitle--highlighted"> {t('mainPage.mainSection.heroText__subTitle', { returnObjects: true })[3]} </span>
            {t('mainPage.mainSection.heroText__subTitle', { returnObjects: true })[4]} <Link className="heroText__subTitle--highlighted linkStyle">{t('mainPage.mainSection.heroText__subTitle', { returnObjects: true })[5]}</Link>
          </p>
          <BtnsBlock
            style={{ justifyContent: 'start'}}
            direction={'row'}
            addBtnClass={'mainBtn'}
            btnStyle={{ padding: "12px 32px" }}
            btnTo={'/signup'}
            btnText={ t('mainPage.mainSection.BtnsBlock.btnText') }
            linkStyle={{ padding: "12px 4px 12px 16px" }}
            linkTo={"/pricing"}
            linkText={ t('mainPage.mainSection.BtnsBlock.linkText') }
          >       
            </BtnsBlock>
        </div> 
      </div>
      <div className="heroImages">
        <img className="heroImages__items" src={HeroImage} alt={ t('mainPage.heroImages', { returnObjects: true })[0] } />
        <img className="heroImages__items" src={LineGrey} alt={ t('mainPage.heroImages', { returnObjects: true })[1] } />
        <img className="heroImages__items" src={LineViolet} alt={ t('mainPage.heroImages', { returnObjects: true })[2] } />
        <img className="heroImages__items" src={PaperPlane} alt={ t('mainPage.heroImages', { returnObjects: true })[3] }  />
        <img className="heroImages__items" src={Document} alt={ t('mainPage.heroImages', { returnObjects: true })[4] } />
        <img className="heroImages__items" src={Cookie} alt={ t('mainPage.heroImages', { returnObjects: true })[5] } />
        <img className="heroImages__items" src={Lock} alt={ t('mainPage.heroImages', { returnObjects: true })[6] } />
      </div>
    </section>
    <section className='possibilities'>
      <div className="possibilities__wrapper">
        <div className="possibilities__image">
          <img src={ ContentImage } alt={ t('mainPage.possibilities__image') } />
        </div>
        <div className="possibilities__content">
          <p className="mainPage__upTitle">
            { t('mainPage.possibilities.upTitle') }
          </p>
          <h2 className="mainPage__title">
            { t('mainPage.possibilities.title') }
          </h2>
          <p className="possibilities__text">
            { t('mainPage.possibilities.possibilities__text') }
          </p>
          <ul className="possibilities__featureList">
            { t('mainPage.possibilities.featureList', { returnObjects: true }).map((item, index) => (
              <li key={index} className="possibilities__text">{ item }</li>
            )) }
          </ul>
          <BtnsBlock
            style={{ justifyContent: 'start'}}
            direction={'row'}
            addBtnClass={'mainBtn'}
            btnStyle={{ padding: "12px 32px" }}
            btnTo={'/signup'}
            btnText={ t('mainPage.possibilities.BtnsBlock.btnText') }
            linkStyle={{ padding: "12px 4px 12px 16px" }}
            linkTo={"/pricing"}
            linkText={ t('mainPage.possibilities.BtnsBlock.linkText') }
          >       
            </BtnsBlock>
        </div>
      </div>
      
    </section>
    
  </div>
}

export default MainPage;