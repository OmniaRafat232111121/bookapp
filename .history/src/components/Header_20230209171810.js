import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authHandler } from '../store/authSlice';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const { error } = useSelector((state) => state.books);
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {error && (
        <div className='alert alert-danger mb-0' role='alert'>
          {error}
        </div>
      )}

      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button
          className='btn btn-outline-primary'
          type='submit'
          onClick={() => dispatch(authHandler())}
        >
          {loggedIn ? 'Log Out' : 'Log In'}
        </button>

        <li>
          <button onClick={() => {
            i
          }}>
            ar
          </button>
          <button>
            En
          </button>
        </li>
      </nav>
    </Fragment>
  );
};

export default Header;
