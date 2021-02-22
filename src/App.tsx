import { useCallback, useEffect, useState } from 'react';
import {BrowserRouter,  Route, Switch} from 'react-router-dom'
import { Main } from './components/Main';
import Cam from './components/Cam';

import {primaryTheme, secundaryTheme} from './styles/theme.style'
import { GlobalStyles } from './styles/Global.style';
import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button';

function App() {
  const [theme, setTheme] = useState('primary');
  const themeMode = theme === "secundary" ? secundaryTheme: primaryTheme;

  const toggleTheme = useCallback(() => {
    theme === "secundary" ? setTheme("primary") : setTheme("secundary")
  }, [theme])




  return (
    <>
      <BrowserRouter>
        <Switch>
          <ThemeProvider theme={themeMode}>
            <GlobalStyles/>
              <Route exact path="/">
                  <Main theme={theme}/>
                  <Button theme={theme} toggleTheme={toggleTheme}></Button>
                </Route>
              <Route exact path="/:cam" component={Cam}/>
          </ThemeProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
