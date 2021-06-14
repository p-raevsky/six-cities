import React from 'react';
import Header from '../../elements/header/header';
import Footer from '../../elements/footer/footer';

function NotFoundPage() {
  return (
    <div className="page">
      <Header />
      <main className="page__main container">
        <section style={{width: '100%'}}>
          <h1>404. Page not found</h1>
          <a href="/">Back to Home page</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
