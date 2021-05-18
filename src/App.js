import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/layout/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
