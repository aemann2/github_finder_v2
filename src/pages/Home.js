import Navbar from '../components/header/navbar/Navbar';
import Search from '../components/header/search/Search';
import Users from '../components/users/Users';

const Home = () => {
  return (
    <div className='App'>
      <Navbar />
      <Search />
      <Users />
    </div>
  );
};

export default Home;
