import Navbar from '../components/header/navbar/Navbar';
import User from '../components/user/User';
import Repos from '../components/repos/Repos';

const UserPage = () => {
  return (
    <div>
      <Navbar />
      <User />
      <Repos />
    </div>
  );
};

export default UserPage;
