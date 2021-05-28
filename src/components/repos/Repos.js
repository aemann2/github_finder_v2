import React, { useEffect, useContext } from 'react';
import axiosGet from '../../utils/axiosGet';
import { useParams } from 'react-router-dom';
import classes from './css/Repos.module.scss';
import Loader from '../loader/Loader';
import { RepoContext } from '../../context/RepoContext';
import RepoItem from './components/RepoItem';

const Repos = () => {
  const { repos, setRepos, loading, setLoading } = useContext(RepoContext);
  const { login } = useParams();

  const endpoint = `/users/${login}/repos?per_page=5&sort=created:asc`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axiosGet(endpoint);
      setRepos([...res.data]);
      setLoading(false);
    };

    fetchData();
  }, [setRepos, setLoading, endpoint]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.repoWrapper}>
          <div className={classes.repos}>
            {repos.map((repo) => {
              return <RepoItem key={repo.id} repo={repo} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Repos;
