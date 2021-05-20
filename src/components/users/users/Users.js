import React, { useContext, useState, useEffect } from 'react';
import UserItem from '../userItem/UserItem';
import { UserContext } from '../../../context/UserContext';
import classes from './css/Users.module.scss';
import axios from 'axios';

const Users = () => {
  const { users, setUsers, loading, setLoading } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers([...res.data]);
      setLoading(false);
    };

    fetchData();
  }, [setUsers]);

  return (
    <>
      {loading ? (
        <img
          className={classes.loader}
          src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
          alt='Loading...'
        />
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
