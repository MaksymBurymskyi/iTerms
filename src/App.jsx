import './App.scss';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound';
import RegisterPage from './components/registrationPages/registerPage/RegisterPage';
import LogInPage from './components/registrationPages/logInPage/LogInPage';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';
import Blog from './components/blog/Blog';
import Post from './components/post/Post';
// eslint-disable-next-line no-unused-vars
import i18n from "./_i18n/i18n";


import WebFont from "webfontloader";
import { useEffect } from "react";
import React from "react";
import {
  BrowserRouter, 
  Routes, 
  Route, 
  useLocation,
  Navigate 
} from 'react-router-dom';
import { useSelector } from "react-redux";

function App() {

  const language = useSelector((state) => state.language);

  //хук виконує завантаження шрифтів
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans", "Poppins", "PT Mono"],
      },
    });
  }, []);

  useEffect(() => {
    onChangeLanguage(language)
  }, [language]);

  function onChangeLanguage(language) {
    i18n.changeLanguage(language);
  }
 
  function Contacts() {
    return <div>Contacts</div>
  }
  
  //функція повертає футер за виключенням вказаних шляхів
  function FooterComponent() {
    const location = useLocation();

    return (location.pathname === '/signup' || location.pathname === '/signin' || location.pathname === '/404') ? null : <Footer />
  }

  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/signup' element={<RegisterPage />} />
        <Route path='/signin' element={<LogInPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<Post />} />
        {/* <Route exact path='/#mainSection' element={<MainPage />} /> */}
        <Route exact path='/' element={<MainPage />} />
        <Route path='*' element={<Navigate to='/404' />} />
        
      </Routes>
      <Routes>

        <Route path='*' element={<FooterComponent />}/>
        
      </Routes>
            
    </BrowserRouter>
  </>
}

export default App;
