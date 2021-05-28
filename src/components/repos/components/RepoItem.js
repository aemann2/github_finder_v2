import React from 'react';
import classes from '../css/Repos.module.scss';

const RepoItem = ({ repo }) => {
  return (
    <div className={classes.repo}>
      <a href={repo.html_url} target='_blank' rel='noreferrer'>
        {repo.name}
      </a>
    </div>
  );
};

export default RepoItem;
