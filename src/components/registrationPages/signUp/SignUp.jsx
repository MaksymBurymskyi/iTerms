import './SignUp.scss';
import Button from '../../button/Button';
import { ReactComponent as IconGoogle } from '../../../imgs/google-color-icon.svg';
import { ReactComponent as IconFacebook } from '../../../imgs/facebook-color-icon.svg';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SignUp() {
  const [t] = useTranslation(['translation']);

  // Валідація виконується за допомогою бібліотеки "react-hook-form"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // При натисканні на кнопку type="submit" викликається функція setTimeout для запобігання випадкового подвійного надсилання форми
  const onSubmit = data => {
    setTimeout(() => {
      console.log('data:', JSON.stringify(data, null, 2));
    }, 800);
  };

  return (
    <div className='formBlock'>
      <h2>{t('signUp.title')}</h2>
      <form className='formBlock__form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>{t('signUp.form.labelName')}</label>
        <input
          type='text'
          id='name'
          placeholder={t('signUp.form.placeholderName')}
          {...register('name', {
            required: t('signUp.form.requiredName'),
            minLength: { value: 2, message: t('signUp.form.minLengthName') },
            pattern: {
              value: /^\D+$/g,
              message: t('signUp.form.patternName'),
            },
          })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <div className='formBlock__inpIndicator' role='alert'>
            {errors.name?.message}
          </div>
        )}

        <label htmlFor='email'>{t('signUp.form.labelEmail')}</label>
        <input
          type='email'
          placeholder={t('signUp.form.placeholderEmail')}
          {...register('email', {
            required: t('signUp.form.requiredEmail'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: t('signUp.form.patternEmail'),
            },
          })}
          id='email'
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <div className='formBlock__inpIndicator' role='alert'>
            {errors.email?.message}
          </div>
        )}

        <label htmlFor='password'>{t('signUp.form.labelPassword')}</label>
        <input
          type='password'
          id='password'
          placeholder={t('signUp.form.placeholderPassword')}
          {...register('password', {
            required: t('signUp.form.requiredPassword'),
            minLength: {
              value: 8,
              message: t('signUp.form.minLengthPassword'),
            },
          })}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && (
          <div className='formBlock__inpIndicator' role='alert'>
            {errors.password?.message}
          </div>
        )}

        <p className='formBlock__formText'>
          {t('signUp.agreementLinks', { returnObjects: true })[0]}
          <Link to={'/Policy Details'}>
            {t('signUp.agreementLinks', { returnObjects: true })[1]}
          </Link>
          {t('signUp.agreementLinks', { returnObjects: true })[2]}
          <Link to={'/Policy Details'}>
            {t('signUp.agreementLinks', { returnObjects: true })[3]}
          </Link>
        </p>

        <Button addClass={'mainBtn'} style={{ padding: '12px 50px' }}>
          {t('signUp.buttons.signUp')}
        </Button>
      </form>
      <div className='formBlock__btns'>
        <h3>{t('signUp.text')}</h3>

        <div>
          <Button
            addClass={'lightBtn'}
            style={{ padding: '12px 21px' }}
            icon={<IconGoogle className='btnIcon' />}
            to={'/GoogleLogin'}>
            Google
          </Button>
          <Button
            addClass={'lightBtn'}
            style={{ padding: '12px' }}
            icon={<IconFacebook className='btnIcon' />}
            to={'/FacebookLogin'}>
            Facebook
          </Button>
        </div>

        <p className='formBlock__btnsText'>
          {t('signUp.redirect', { returnObjects: true })[0]}
          <Link to='/signin'>
            {t('signUp.redirect', { returnObjects: true })[1]}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
