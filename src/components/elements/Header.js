import React from 'react';
import { Link } from '@reach/router';

import Logo from '../images/reactMovie_logo.png';
import { 
    StyledHeader, 
    StyledLogo
} from '../styles/StyledHeader';

const Header = () => (
<StyledHeader>
  <div className="header-content">
    <Link to="/">
      <StyledLogo src={Logo} alt="logo" />
    </Link>
  </div>
</StyledHeader>
)

export default Header;