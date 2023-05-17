import './App.scss';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound';
import RegisterPage from './components/registrationPages/registerPage/RegisterPage';
import LogInPage from './components/registrationPages/logInPage/LogInPage';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';

import WebFont from "webfontloader";
import { useEffect } from "react";
import React from "react";
import {
  BrowserRouter, 
  Routes, 
  Route, 
  useLocation,
  Navigate 
  // Outlet,
  // Switch,
  // Link, 
  // NavLink, 
  // useParams,
  // useNavigate
} from 'react-router-dom';



function App() {

  //хук виконує завантаження шрифтів
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans", "Poppins", "PT Mono"],
      },
    });
  }, []);
 
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
