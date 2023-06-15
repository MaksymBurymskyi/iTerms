import RegistrationPages from '../RegistrationPages';
import SignIn from '../signIn/SignIn';
import React from 'react';

function LogInPage() {
  return <RegistrationPages formPage={<SignIn />}></RegistrationPages>;
}

export default LogInPage;
