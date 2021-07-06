import React, {useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import Header from '../../elements/header';

import {login} from '../../../store/api-actions';
import {AppRoute} from '../../../const';
import {getCity} from '../../../store/process/selectors';

function SingInPage() {
  const currentCity = useSelector(getCity);

  const loginRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const checkValidity = (str) => str.trim() ? setIsValid(true) : setIsValid(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    passwordRef.current.value.trim();

    dispatch(login({
      login: loginRef.current.value,
      password: password,
    }));
  };

  const handlePasswordChange = ({target: {value}}) => {
    setPassword(value);
    checkValidity(value);
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isValid}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.ROOT}>
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SingInPage;
