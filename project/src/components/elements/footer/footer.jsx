import React from 'react';

import Logo from '../logo/logo';
import {logoType} from '../../../settings';

function Footer() {
  return (
    <footer className="footer container">
      <Logo type = {logoType.FOOTER.type} />
    </footer>
  );
}

export default Footer;
