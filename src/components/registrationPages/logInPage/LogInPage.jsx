import RegistrationPages from "../RegistrationPages";
import SignIn from "../signIn/SignIn";


function LogInPage() {
  return <RegistrationPages formPage={<SignIn/>}></RegistrationPages>
}

export default LogInPage;