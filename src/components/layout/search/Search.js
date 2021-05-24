import React, { useContext, useState } from 'react';
import Reset from './components/Reset';
import classes from './css/Search.module.scss';
import axiosGet from '../../../utils/axiosGet';
import { UserContext } from '../../../context/UserContext';

const Search = () => {
  const { setUsers, setLoading, isDefaultLoad, setIsDefaultLoad } =
    useContext(UserContext);
  const [searchInput, setSearchInput] = useState('');

  const endpoint = `/search/users?q=${searchInput}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axiosGet(endpoint);
      setUsers([...res.data.items]);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
    setLoading(false);
    setIsDefaultLoad(false);
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
      {!isDefaultLoad && (
        <Reset
          setUsers={setUsers}
          setLoading={setLoading}
          setIsDefaultLoad={setIsDefaultLoad}
        />
      )}
    </div>
  );
};

export default Search;
