import PropTypes from 'prop-types';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../images/unknown.png';
import { StyledActor } from '../styles/StyledActor';

const Actor = ({ actor }) => {
  return (
    <StyledActor>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt='Actor thumb'
      />
      <span className='actor-name'>{actor.name}</span>
      <span className='actor-character'>{actor.character}</span>
    </StyledActor>
  );
};

Actor.propTypes = {
  actor: PropTypes.object
};

export default Actor;
