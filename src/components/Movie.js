import { useMovieFetch } from './hooks/useMovieFetch';
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Actor from './elements/Actor';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log(movie);

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar />
      <Grid>
        <Actor />
      </Grid>
    </>
  );
};

export default Movie;
