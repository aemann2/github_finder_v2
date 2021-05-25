import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import Home from './components/pages/Home';
import About from './components/pages/About';
import UserPage from './components/pages/UserPage';

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/:login'>
              <UserPage />
            </Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
