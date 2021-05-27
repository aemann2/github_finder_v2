import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import UserCard from './components/UserCard';
import Loader from '../loader/Loader';
import { Button } from 'react-bootstrap';
import classes from './css/User.module.scss';
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
      <div className={classes.top}>
        <Link to={`/`}>
          <Button className={`rounded-0 btn-secondary ${classes.backBtn}`}>
            Back To Search
          </Button>
        </Link>
        <span className={classes.hireable}>
          Hireable:
          {user.hireable ? (
            <i className={`fas fa-check ${classes.check}`}></i>
          ) : (
            <i class={`far fa-times-circle ${classes.x}`}></i>
          )}
        </span>
      </div>
      {loading ? <Loader /> : <UserCard user={user} />}
    </>
  );
};

export default User;
