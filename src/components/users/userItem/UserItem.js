import React from 'react';
import { Card, Button } from 'react-bootstrap';

const UserItem = ({ id, avatar_url, login, html_url }) => {
  return (
    <>
      <Card key={id} style={{ width: '18rem' }}>
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
