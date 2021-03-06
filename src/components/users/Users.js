import React, { useContext, useEffect } from 'react';
import UserItem from './components/UserItem';
import Loader from '../loader/Loader';
import { UserContext } from '../../context/UserContext';
import classes from './css/Users.module.scss';
import axiosGet from '../../utils/axiosGet';

const Users = () => {
  const { users, setUsers, loading, setLoading } = useContext(UserContext);

  const endpoint = `/users`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axiosGet(endpoint);
      setUsers([...res.data]);
      setLoading(false);
    };

    fetchData();
  }, [setUsers, setLoading, endpoint]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.users}>
          {users.map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      )}
    </>
  );
};

export default Users;
