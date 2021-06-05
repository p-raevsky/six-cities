import React from 'react';
import Logo from '../../logo/logo';

function NotFoundPage() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main container">
        <section style={{width: '100%'}}>
          <h1>404. Page not found</h1>
          <a href="/">Вернуться на главную</a>
        </section>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default NotFoundPage;
