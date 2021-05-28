import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import RepoContextProvider from './context/RepoContext';
import Home from './pages/Home';
import About from './pages/About';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className='App'>
      <RepoContextProvider>
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
      </RepoContextProvider>
    </div>
  );
}

export default App;
