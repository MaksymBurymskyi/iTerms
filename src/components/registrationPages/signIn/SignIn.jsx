import './SignIn.scss';
import Button from '../../button/Button';
import { ReactComponent as IconGoogle } from '../../imgsForComponents/google-icon.svg';
import { ReactComponent as IconFacebook } from '../../imgsForComponents/facebook-icon.svg';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function SignIn() {

  // Валідація виконується за допомогою бібліотеки "react-hook-form"
  const { register, handleSubmit, formState: { errors } } = useForm();

  // При натисканні на кнопку type="submit" викликається функція setTimeout для запобігання випадкового подвійного надсилання форми
  const onSubmit = data => {
    setTimeout(() => {
      console.log("data:", JSON.stringify(data, null, 2));
    }, 800); 
  }
  
  return <div className="signInBlock">
    <h2>Sign in</h2>
    <div className="signInBlock__signInWith">
      <p>Sign in with</p>
      <div>
        <Button addClass={'lightBtn'} style={{ padding: "12px 21px" }} icon={<IconGoogle className='btnIcon' />} to={'/GoogleLogin'}>Google</Button>
        <Button addClass={'lightBtn'} style={{ padding: "12px"}} icon={<IconFacebook className='btnIcon' />} to={'/FacebookLogin'}>Facebook</Button>
      </div>
      <span>or</span>
    </div>
    <form className="signInBlock__form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder='Enter the Email' {...register("email", { required: "Email Address is required", pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'invalid Email Address'} })} id="email" aria-invalid={errors.email ? "true" : "false"} />
      {errors.email && <div className="signInBlock__inpIndicator" role="alert">{errors.email?.message}</div>}
      
      <div>
        <label htmlFor="password">Password</label> <Link>Forgot Password</Link>
      </div>
      <input type="password" id="password" placeholder='At least 8 characters long' {...register("password", { required: 'password is required', minLength: {value: 8, message: "password is too short" }})}  aria-invalid={errors.password ? "true" : "false"} />
      {errors.password && <div className="signInBlock__inpIndicator" role="alert">{errors.password?.message}</div>}

      <Button addClass={'mainBtn'} style={{ padding: "12px 98px" }} >Sign in</Button>
      
    </form>
    <div className="signInBlock__redirect">Don't have an account? <Link to={'/signup'}>Sign up</Link> </div>
  </div>
}

export default SignIn;