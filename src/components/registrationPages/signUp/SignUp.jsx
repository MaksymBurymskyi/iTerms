import './SignUp.scss';
import Button from '../../button/Button';
import { ReactComponent as IconGoogle } from '../../iconsForComponents/google-icon.svg';
import { ReactComponent as IconFacebook } from '../../iconsForComponents/facebook-icon.svg';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


function SignUp() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    setTimeout(() => {
      console.log("data:", JSON.stringify(data, null, 2) );
    }, 800); 
  }
  
  return <div className="formBlock">
    <h2>Sign up</h2>
    <form className="formBlock__form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" placeholder='Your Name' {...register("name", { required: 'Name is required', minLength: { value: 2, message: 'Name must be longer' }, pattern: { value: /^\D+$/g, message: 'numbers is prohibited' } })} aria-invalid={errors.name ? "true" : "false"} />
      {errors.name && <div className="formBlock__inpIndicator" role="alert">{errors.name?.message}</div>}
      
      <label htmlFor="email">Email</label>
      <input type="email" placeholder='Enter the Email' {...register("email", { required: "Email Address is required", pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'invalid Email Address'} })} id="email" aria-invalid={errors.email ? "true" : "false"} />
      {errors.email && <div className="formBlock__inpIndicator" role="alert">{errors.email?.message}</div>}
      
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder='At least 8 characters long' {...register("password", { required: 'password is required', minLength: {value: 8, message: "password is too short" }})}  aria-invalid={errors.password ? "true" : "false"} />
      {errors.password && <div className="formBlock__inpIndicator" role="alert">{errors.password?.message}</div>}
      

      {/* доробити посилання та кнопки, наразі не активні */}
      <p className="formBlock__form-text">By proceeding, I agree with the <Link to={'/Policy Details'}>Terms of Service</Link> and <Link to={'/Policy Details'}>Privacy & Policy</Link></p>

      <Button style={{ padding: "12px 62px", fontSize: "16px", lineHeight: "150%" }} >Create account</Button>
        
    </form>  
    <div className="formBlock__btns">
      <h3>Sign up with</h3>

      <div>
        <Button style={{ padding: "12px 21px", fontSize: "16px", lineHeight: "24px" }} icon={<IconGoogle className='btnIcon' />} >Google</Button>
        <Button  style={{ padding: "12px", fontSize: "16px", lineHeight: "24px" }} icon={<IconFacebook className='btnIcon' />} >Facebook</Button>
      </div>

      <p className="formBlock__btns-text">Already have an account? <Link to="/signin">Log in</Link></p>

    </div>
  </div> 
}

export default SignUp;