import Header from './elements/Header';
import Home from './Home';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
};

export default App;
