import './MainPage.scss';
import BtnsBlock from '../btnsBlock/BtnsBlock';
import HeroImage from '../../imgs/mainPage/hero-image.svg';
import LineGrey from '../../imgs/mainPage/line-gray.svg';
import LineViolet from '../../imgs/mainPage/line-violet.svg';
import PaperPlane from '../../imgs/mainPage/paper-plane.svg';
import Document from '../../imgs/mainPage/document.svg';
import Cookie from '../../imgs/mainPage/cookie.svg';
import Lock from '../../imgs/mainPage/lock.svg';
import ContentImage from '../../imgs/mainPage/content-image.svg';
import Device from '../../imgs/mainPage/devices.svg';

// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';

function MainPage() {
  // хуки для відображення тексту залежно від обраної мови
  const [t] = useTranslation(['translation']);
  const [e] = useTranslation(['extraTr']);

  // перевірка ширини екрану для відображення блоків
  const isMobile = useMediaQuery('(max-width:992px)');
  const isSmall = useMediaQuery('(max-width:768px)');
  const isExtraSmall = useMediaQuery('(max-width:480px)');

  function renderFeatureList() {
    if (
      Array.isArray(
        t('mainPage.possibilities.featureList', {
          returnObjects: true,
        }),
      )
    ) {
      return t('mainPage.possibilities.featureList', {
        returnObjects: true,
      })?.map((item, index) => (
        <li key={index} className='possibilities__text'>
          {item}
        </li>
      ));
    }
  }

  function renderShortFeatureList() {
    if (
      Array.isArray(
        t('mainPage.possibilities.shortFeatureList', {
          returnObjects: true,
        }),
      )
    ) {
      return t('mainPage.possibilities.shortFeatureList', {
        returnObjects: true,
      }).map((item, index) => (
        <li key={index} className='possibilities__text'>
          {item}
        </li>
      ));
    }
  }

  return (
    <main>
      <div className='page'>
        <section className='mainSection' id='mainSection'>
          <div className='container'>
            <div className='heroText'>
              <p className='page__upTitle'>
                {t('mainPage.mainSection.heroText__upTitle')}
              </p>
              <h1 className='page__title'>
                {t('mainPage.mainSection.heroText__title')}
              </h1>
              <p className='heroText__subTitle'>
                {
                  t('mainPage.mainSection.heroText__subTitle', {
                    returnObjects: true,
                  })[0]
                }
                <span className='heroText__subTitle--highlighted'>
                  {' '}
                  {
                    t('mainPage.mainSection.heroText__subTitle', {
                      returnObjects: true,
                    })[1]
                  }{' '}
                </span>
                {
                  t('mainPage.mainSection.heroText__subTitle', {
                    returnObjects: true,
                  })[2]
                }
                <span className='heroText__subTitle--highlighted'>
                  {' '}
                  {
                    t('mainPage.mainSection.heroText__subTitle', {
                      returnObjects: true,
                    })[3]
                  }{' '}
                </span>
                {
                  t('mainPage.mainSection.heroText__subTitle', {
                    returnObjects: true,
                  })[4]
                }{' '}
                <Link className='heroText__subTitle--highlighted linkStyle'>
                  {
                    t('mainPage.mainSection.heroText__subTitle', {
                      returnObjects: true,
                    })[5]
                  }
                </Link>
              </p>
              <BtnsBlock
                style={{ justifyContent: isMobile ? 'center' : 'start' }}
                direction={'row'}
                addBtnClass={'mainBtn'}
                btnStyle={{ padding: '12px 32px' }}
                btnTo={'/signup'}
                btnText={
                  isExtraSmall
                    ? t('mainPage.possibilities.BtnsBlock.btnText')
                    : t('mainPage.mainSection.BtnsBlock.btnText')
                }
                linkStyle={{ padding: '12px 4px 12px 16px' }}
                linkTo={'/pricing'}
                linkText={t(
                  'mainPage.mainSection.BtnsBlock.linkText',
                )}></BtnsBlock>
            </div>
          </div>
          <div className='heroImages'>
            <img
              className='heroImages__items'
              src={HeroImage}
              alt={e('mainPage.heroImages', { returnObjects: true })[0]}
            />
            <img
              className='heroImages__items'
              src={LineGrey}
              alt={e('mainPage.heroImages', { returnObjects: true })[1]}
            />
            <img
              className='heroImages__items'
              src={LineViolet}
              alt={e('mainPage.heroImages', { returnObjects: true })[2]}
            />
            <img
              className='heroImages__items'
              src={PaperPlane}
              alt={e('mainPage.heroImages', { returnObjects: true })[3]}
            />
            <img
              className='heroImages__items'
              src={Document}
              alt={e('mainPage.heroImages', { returnObjects: true })[4]}
            />
            <img
              className='heroImages__items'
              src={Cookie}
              alt={e('mainPage.heroImages', { returnObjects: true })[5]}
            />
            <img
              className='heroImages__items'
              src={Lock}
              alt={e('mainPage.heroImages', { returnObjects: true })[6]}
            />
          </div>
        </section>
        <section className='possibilities'>
          <div className='possibilities__wrapper'>
            <div className='possibilities__image'>
              {isSmall ? (
                <img src={Device} alt={e('mainPage.possibilities__image')} />
              ) : (
                <img
                  src={ContentImage}
                  alt={e('mainPage.possibilities__image')}
                />
              )}
            </div>
            <div className='possibilities__content'>
              <p className='page__upTitle'>
                {isSmall
                  ? t('mainPage.possibilities.upMobileTitle')
                  : t('mainPage.possibilities.upTitle')}
              </p>
              <h2 className='page__title'>
                {isSmall
                  ? t('mainPage.possibilities.mobileTitle')
                  : t('mainPage.possibilities.title')}
              </h2>
              <p className='possibilities__text'>
                {isSmall
                  ? t('mainPage.possibilities.possibilities__mobileText')
                  : t('mainPage.possibilities.possibilities__text')}
              </p>
              <ul className='possibilities__featureList'>
                {isMobile ? renderShortFeatureList() : renderFeatureList()}
              </ul>
              <BtnsBlock
                style={{ justifyContent: 'start' }}
                direction={'row'}
                addBtnClass={'mainBtn'}
                btnStyle={{ padding: '12px 32px' }}
                btnTo={'/signup'}
                btnText={t('mainPage.possibilities.BtnsBlock.btnText')}
                linkStyle={{ padding: '12px 4px 12px 16px' }}
                linkTo={'/pricing'}
                linkText={t(
                  'mainPage.possibilities.BtnsBlock.linkText',
                )}></BtnsBlock>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
