import './MiddleBlock.scss';
import Checkpoint from './checkpoint/Checkpoint';
import Shield from '../../imgs/shield.svg';
import PoliciesIcon from '../../imgs/policies-icon.svg';
import BusinessIcon from '../../imgs/businesses-icon.svg';
import ViewsIcon from '../../imgs/views-icon.svg';
// eslint-disable-next-line no-unused-vars
import i18n from '../../_i18n/i18n';

import React from 'react';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';

function MiddleBlock() {
  // хуки для відображення тексту залежно від обраної мови
  const [t] = useTranslation(['translation']);
  const [e] = useTranslation(['extraTr']);

  // перевірка ширини екрану для відображення блоків
  const isMobile = useMediaQuery('(max-width:992px)');

  return (
    <div className='middleBlock'>
      <div className='container'>
        <div className='middleBlock__textWrapp'>
          <p className='middleBlock__upTitle'>
            {isMobile
              ? t('middleBlock.upMobileTitle')
              : t('middleBlock.upTitle')}
          </p>
          <h2 className='middleBlock__title'>
            {isMobile ? t('middleBlock.mobileTitle') : t('middleBlock.title')}
          </h2>
          <p className='middleBlock__subTitle'>
            {isMobile
              ? t('middleBlock.subMobileTitle')
              : t('middleBlock.subTitle')}
          </p>
        </div>
        <div className='middleBlock__iconWrapp'>
          <Checkpoint
            icon={PoliciesIcon}
            altIcon={e('middleBlock.checkpoint')}
            descr={t('middleBlock.policies')}
            value='100,000+'
          />
          <Checkpoint
            icon={BusinessIcon}
            altIcon={e('middleBlock.checkpoint')}
            descr={t('middleBlock.businesses')}
            value='140,000+'
          />
          <Checkpoint
            icon={ViewsIcon}
            altIcon={e('middleBlock.checkpoint')}
            descr={t('middleBlock.views')}
            value='60 Million+'
          />
          <img
            className='middleBlock__ideogram'
            src={Shield}
            alt={e('middleBlock.shield')}
          />
        </div>
      </div>
    </div>
  );
}

export default MiddleBlock;
