import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/layout/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserItem from './components/users/UserItem';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <UserItem />
      </Router>
    </div>
  );
}

export default App;
