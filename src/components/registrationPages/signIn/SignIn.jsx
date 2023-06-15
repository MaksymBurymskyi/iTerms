import './SignIn.scss';
import Button from '../../button/Button';
import { ReactComponent as IconGoogle } from '../../../imgs/google-icon.svg';
import { ReactComponent as IconFacebook } from '../../../imgs/facebook-icon.svg';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SignIn() {
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
    <div className='signInBlock'>
      <h2>{t('signIn.title')}</h2>
      <div className='signInBlock__signInWith'>
        <p>{t('signIn.text', { returnObjects: true })[0]}</p>
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
        <span>{t('signIn.text', { returnObjects: true })[1]}</span>
      </div>
      <form className='signInBlock__form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>{t('signIn.form.labelEmail')}</label>
        <input
          type='email'
          placeholder={t('signIn.form.placeholderEmail')}
          {...register('email', {
            required: t('signIn.form.requiredEmail'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: t('signIn.form.patternEmail'),
            },
          })}
          id='email'
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <div className='signInBlock__inpIndicator' role='alert'>
            {errors.email?.message}
          </div>
        )}

        <div className='signInBlock__passwordLink'>
          <label htmlFor='password'>{t('signIn.form.labelPassword')}</label>
          <Link>{t('signIn.form.passwordLink')}</Link>
        </div>
        <input
          type='password'
          id='password'
          placeholder={t('signIn.form.placeholderPassword')}
          {...register('password', {
            required: t('signIn.form.requiredPassword'),
            minLength: {
              value: 8,
              message: t('signIn.form.minLengthPassword'),
            },
          })}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && (
          <div className='signInBlock__inpIndicator' role='alert'>
            {errors.password?.message}
          </div>
        )}

        <Button addClass={'mainBtn'} style={{ padding: '12px 98px' }}>
          {t('signIn.buttons.signIn')}
        </Button>
      </form>
      <div className='signInBlock__redirect'>
        {t('signIn.redirect', { returnObjects: true })[0]}
        <Link to={'/signup'}>
          {t('signIn.redirect', { returnObjects: true })[1]}
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
