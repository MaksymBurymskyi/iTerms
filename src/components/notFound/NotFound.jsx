import './NotFound.scss';
import Button from '../button/Button';
import Image404 from '../../imgs/404.svg';

import React from 'react';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const [t] = useTranslation(['translation']);
  const [e] = useTranslation(['extraTr']);

  return (
    <div className='notFound'>
      <div className='container'>
        <img src={Image404} alt={e('notFound')} />
        <h2>{t('notFound.title')}</h2>
        <p>{t('notFound.description')}</p>
        <Button addClass={'mainBtn'} style={{ padding: '12px 32px' }} to={'/'}>
          {t('notFound.button')}
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
