import { Link } from '@reach/router';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className='clickable' src={image} alt='movie thumb' />
        </Link>
      ) : (
        <img src={image} alt='movie thumb' />
      )}
    </StyledMovieThumb>
  );
};

export default MovieThumb;
