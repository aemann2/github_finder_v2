import Navbar from '../components/layout/navbar/Navbar';
import Search from '../components/layout/search/Search';
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
