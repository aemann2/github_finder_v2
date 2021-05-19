import React, { useState, useEffect } from 'react';
import UserItem from '../userItem/UserItem';
import classes from './css/Users.module.scss';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get('https://api.github.com/users').then((res) => {
      const users = res.data;
      setUsers([...users]);
    });

    setLoading(false);
  }, []);

  return (
    <div className={classes.users}>
      {loading
        ? 'Loading'
        : users.map(({ id, login, avatar_url, html_url }) => {
            return (
              <UserItem
                key={id}
                login={login}
                avatar_url={avatar_url}
                html_url={html_url}
              />
            );
          })}
    </div>
  );
};

export default Users;
