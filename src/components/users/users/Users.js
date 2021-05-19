import React, { useContext, useState, useEffect } from 'react';
import UserItem from '../userItem/UserItem';
import { UserContext } from '../../../context/UserContext';
import classes from './css/Users.module.scss';
import axios from 'axios';

const Users = () => {
  const { users, setUsers } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get('https://api.github.com/users').then((res) => {
      const users = res.data;
      setUsers([...users]);
    });

    setLoading(false);
  }, [setUsers]);

  return (
    <>
      {loading ? (
        <img
          className={classes.loader}
          src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
          alt=''
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
