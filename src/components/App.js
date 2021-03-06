import { Router } from '@reach/router';
import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path='/movie-app' />
        <Movie path='/:movieId' />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
