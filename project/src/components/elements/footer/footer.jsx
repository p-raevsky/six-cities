import React from 'react';

import Logo from '../logo/logo';

import {LogoType} from '../../../settings';

function Footer() {
  return (
    <footer className="footer container">
      <Logo type = {LogoType.FOOTER.type} />
    </footer>
  );
}

export default Footer;
