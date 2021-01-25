import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { StyledNavigation } from '../styles/StyledNavigation';

const Navigation = ({ movieTitle }) => {
  return (
    <StyledNavigation>
      <div className='navigation-content'>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <p>|</p>
        <p>{movieTitle}</p>
      </div>
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  movieTitle: PropTypes.string
};

export default Navigation;
