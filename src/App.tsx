import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Main } from './components/Main';

function App() {
  return (
    <>
      <BrowserRouter>
      <Main/>
        {/* <Switch>  
          <Route exact path="/" component={Main}/>
          <Route exact path="/cam" component={Cam}/>
        </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;
