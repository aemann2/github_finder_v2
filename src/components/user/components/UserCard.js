import React from 'react';
import classes from '../css/User.module.scss';
import { Button, Badge } from 'react-bootstrap';

const UserCard = (props) => {
  const {
    avatar_url,
    name,
    location,
    bio,
    html_url,
    login: userName,
    company,
    blog: website,
    followers,
    following,
    public_repos,
    public_gists,
  } = props.user;

  return (
    <div>
      <div className={classes.userCard}>
        <div className={classes.cardLeft}>
          <img className={classes.cardImg} src={avatar_url} alt={userName} />
          <h1 className={classes.cardHeading}>{name}</h1>
          <p>{location ? `Location: ${location}` : `Location: ?`}</p>
        </div>
        <div className={classes.cardRight}>
          <p className={classes.bio}>Bio:</p>
          <p>{bio}</p>
          <Button href={html_url} className='ghBtn bg-dark rounded-0'>
            Github Link
          </Button>
          <p className={classes.username}>Username: {userName}</p>
          <p>{company ? `Company: ${company}` : `Company: ?`}</p>
          <p>{website ? `Website: ${website}` : `Website: ?`}</p>
        </div>
      </div>
      <div className={classes.badges}>
        <Badge className={classes.badge} variant='primary'>
          Followers: {followers}
        </Badge>
        <Badge className={classes.badge} variant='secondary'>
          Following: {following}{' '}
        </Badge>
        <Badge className={classes.badge} variant='success'>
          Public Repos: {public_repos}
        </Badge>
        <Badge className={classes.badge} variant='danger'>
          Public Gists: {public_gists}
        </Badge>
      </div>
    </div>
  );
};

export default UserCard;
