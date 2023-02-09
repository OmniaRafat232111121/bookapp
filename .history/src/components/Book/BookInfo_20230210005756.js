import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
const PostInfo = ({ data }) => {
    const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <h2>Book Details</h2>
      {data ? (
        <div dir='rtl'>
          <p className='fw-bold'>{t('Title')} : {data.title}</p>
          <p className='fst-italic'>{t('price')}: {data.price}</p>
          <p className='fst-italic'> {t('Auth')}  {data.auther}</p>

          <p className='fw-light'>{t("Desc")}: {data.description}</p>
        </div>
      ) : (
        <div className='alert alert-secondary' role='alert'>
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default React.memo(PostInfo);
