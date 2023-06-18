import './App.scss';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound';
import RegisterPage from './components/registrationPages/registerPage/RegisterPage';
import LogInPage from './components/registrationPages/logInPage/LogInPage';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';
import Blog from './components/blog/Blog';
import Post from './components/post/Post';
import ScrollToTop from './scrollToTop/ScrollToTop';
// eslint-disable-next-line no-unused-vars
import i18n from './_i18n/i18n';

import WebFont from 'webfontloader';
import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function App() {
  // мова зі сховища
  const language = useSelector(state => state.language);

  //хук виконує завантаження шрифтів
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans', 'Poppins', 'PT Mono'],
      },
    });
  }, []);

  // хук слідкує за поточною мовою і керує зміною
  useEffect(() => {
    onChangeLanguage(language);
  }, [language]);

  // функція виконує передачу мови до бібліотеки
  function onChangeLanguage(language) {
    i18n.changeLanguage(language);
  }
  // поточна мова в бібліотеці i18n
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    let currentPath = window.location.pathname.split('/');

    currentPath.forEach((item, i) => {
      if (item == 'en') currentPath[i] = currentLanguage;
      if (item == 'uk') currentPath[i] = currentLanguage;
    });

    const newPath = currentPath.join('/');

    // змінюємо шлях за допомогою history
    window.history.pushState(null, '', newPath);
  }, [currentLanguage]);

  function Contacts() {
    return <div>Contacts</div>;
  }

  // function MainPagePath() {
  //   const location = useLocation();

  //   return location.pathname === '/';
  // }

  //функція повертає футер за виключенням вказаних шляхів
  function FooterComponent() {
    const location = useLocation();

    return location.pathname === '/signup' ||
      location.pathname === '/signin' ||
      location.pathname === '/404' ? null : (
      <Footer />
    );
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route
              path={`/${currentLanguage}/contacts`}
              element={<Contacts />}
            />
            <Route path={`/contacts`} element={<Contacts />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='/signup' element={<RegisterPage />} />
            <Route path='/signin' element={<LogInPage />} />
            <Route path={`/en/blog`} element={<Blog />} />
            <Route path={`/uk/blog`} element={<Blog />} />
            {/* <Route path={`/${language}/blog`} element={<Blog />} /> */}
            <Route path='/en/blog/:id' element={<Post />} />
            <Route path={`/uk/blog/:id`} element={<Post />} />
            {/* <Route path={MainPagePath} element={<MainPage />} /> */}
            <Route path='/uk/' element={<MainPage />} />
            <Route path='/en/' element={<MainPage />} />

            {/* <Route exact path='/' element={<MainPage />} /> */}
            {/* <Route path='*' element={<Navigate to='/404' />} /> */}
          </Routes>
          <Routes>
            <Route path='*' element={<FooterComponent />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
