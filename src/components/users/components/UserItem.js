import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import classes from '../css/Users.module.scss';

const UserItem = (props) => {
  const { avatar_url, login, html_url } = props.user;

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={avatar_url} />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Link to={`/${login}`}>
            <Button className={`${classes.profileBtn} bg-dark`}>
              View Profile Info
            </Button>
          </Link>
          <Button href={html_url}>Github Link</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserItem;
