import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import Navbar from './components/layout/navbar/Navbar';
import Search from './components/layout/search/Search';
import Users from './components/users/Users';

function App() {
  return (
    <div className='App'>
      <UserContextProvider>
        <Router>
          <Navbar />
          <Search />
          <Users />
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
