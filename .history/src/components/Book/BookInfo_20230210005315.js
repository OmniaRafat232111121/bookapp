import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
const PostInfo = ({ data }) => {
    const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <h2>Book Details</h2>
      {data ? (
        <div>
          <p className='fw-bold'>{}: {data.title}</p>
          <p className='fst-italic'>Price: {data.price}</p>
          <p className='fst-italic'>Auther: {data.auther}</p>

          <p className='fw-light'>Description: {data.description}</p>
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
