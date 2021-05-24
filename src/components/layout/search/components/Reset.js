import React from 'react';
import axiosGet from '../../../../utils/axiosGet';
import classes from '../css/Search.module.scss';

const Clear = ({ setUsers, setLoading, setIsDefaultLoad }) => {
  const endpoint = `/users`;

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await axiosGet(endpoint);
      setUsers([...res.data]);
    } catch (error) {
      console.error(error);
      setUsers([]);
    }
    setLoading(false);
    setIsDefaultLoad(true);
  };

  return (
    <>
      <button className={classes.clearBtn} onClick={handleClick}>
        Reset Search
      </button>
    </>
  );
};

export default Clear;
