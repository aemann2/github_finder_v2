import React from 'react';
import { Card, Button } from 'react-bootstrap';

const UserItem = (props) => {
  const { avatar_url, login, html_url } = props.user;

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={avatar_url} />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Button href={html_url}>Profile Link</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserItem;
