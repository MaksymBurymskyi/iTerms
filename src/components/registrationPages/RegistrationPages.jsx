import "./RegistrationPages.scss";

function RegistrationPages({formPage}) {
  
  return <div className="registration">
    <div className="container">
      <div className="registration__wrapper">
        <div className="registration__wrapper-form">
          {formPage}
        </div>
        <div className="registration__wrapper-canvas"></div>
      </div>
    </div>
  </div>
}

export default RegistrationPages;