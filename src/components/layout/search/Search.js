import React, { useContext, useState } from 'react';
import classes from './css/Search.module.scss';
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';

const Search = () => {
  const { setUsers, setLoading } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users/${searchInput}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers([res.data]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setUsers([]);
      setLoading(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
    setSearchInput('');
  };

  return (
    <div className={classes.searchBar}>
      <form action=''>
        <input
          className={classes.searchBar}
          type='text'
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          placeholder='Search Users...'
          aria-label='Search'
        />
        <input
          onClick={handleClick}
          className={classes.searchBtn}
          type='submit'
          value='Search'
        />
      </form>
    </div>
  );
};

export default Search;
