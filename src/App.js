import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/layout/navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from './components/users/users/Users';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Users />
      </Router>
    </div>
  );
}

export default App;
