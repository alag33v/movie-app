import { Link } from '@reach/router';
import logo from '../images/logo.svg';
import oscar from '../images/oscar.svg';
import { StyledHeader, StyledLogo, StyledOscar } from '../styles/StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <div className='header-content'>
        <Link to='/'>
          <StyledLogo src={logo} alt='logo' />
        </Link>
        <StyledOscar src={oscar} alt='oscar' />
      </div>
    </StyledHeader>
  );
};

export default Header;
