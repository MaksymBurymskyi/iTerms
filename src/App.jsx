import './App.scss';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound';
import RegisterPage from './components/registrationPages/registerPage/RegisterPage';
import LogInPage from './components/registrationPages/logInPage/LogInPage';

import WebFont from "webfontloader";
import { useEffect } from "react";
import React from "react";
import {
  BrowserRouter, 
  Routes, 
  Route, 
  // Switch,
  // Link, 
  // NavLink, 
  // useParams,
  // useNavigate
} from 'react-router-dom';


function App() {

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

  return <>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<Blog />} /> */}
        {/* <Route path='/About' element={<About />} /> */}
        <Route path='/contacts' element={<Contacts />} />
        {/* <Route path='/article/:id' element={<Article />} /> */}
        <Route path='/404' element={<NotFound />} />
        <Route path='/signup' element={<RegisterPage />} />
        <Route path='/signin' element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
