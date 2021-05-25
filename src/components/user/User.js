import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Loader from '../loader/Loader';
import axiosGet from '../../utils/axiosGet';

const User = () => {
  const { login } = useParams();
  const { loading, setLoading } = useContext(UserContext);
  const [user, setUser] = useState({});

  const endpoint = `/users/${login}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axiosGet(endpoint);
      setUser(res.data);
      setLoading(false);
    };

    fetchData();
  }, [setUser, setLoading, endpoint]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='User'>
          <h1>{user.login}</h1>
          <h1>{user.id}</h1>
        </div>
      )}
    </>
  );
};

export default User;
