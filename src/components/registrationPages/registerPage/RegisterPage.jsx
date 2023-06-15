import RegistrationPages from '../RegistrationPages';
import SignUp from '../signUp/SignUp';
import React from 'react';

function RegisterPage() {
  return <RegistrationPages formPage={<SignUp />}></RegistrationPages>;
}

export default RegisterPage;
