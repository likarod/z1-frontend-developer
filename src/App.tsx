import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Main } from './components/Main';
import Cam from './components/Cam';

import {primaryTheme, secundaryTheme} from './styles/theme.style'
import { GlobalStyles } from './styles/Global.style';
import { ThemeProvider } from 'styled-components';
import { useCallback, useState } from 'react';
import { Button } from './components/Button';
import { Container } from './styles/Container.style';

function App() {
  const [theme, setTheme] = useState('primary');
  const themeMode = theme === "primary" ? primaryTheme : secundaryTheme;

  const toggleTheme = useCallback(() => {
    theme === "primary" ? setTheme("secundary") : setTheme("primary")
}, [theme])

  return (
    <>
      <BrowserRouter>
        <Switch>
          <ThemeProvider theme={themeMode}>
            <GlobalStyles/>
            <Route exact path="/">
              <Main/>
              <Container>
                <Button theme={theme} toggleTheme={toggleTheme}>
                </Button>
              </Container>
              </Route>
            <Route exact path="/cam" component={Cam}/>
          </ThemeProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
