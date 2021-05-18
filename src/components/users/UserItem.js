import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const UserItem = () => {
  const [users, setUsers] = useState({
    id: '25',
    login: 'caged',
    avatar_url: 'https://avatars.githubusercontent.com/u/25?v=4',
    html_url: 'https://github.com/caged',
  });

  const { login, avatar_url, html_url } = users;

  return (
    <div>
      <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <Card.Img variant='top' src={avatar_url} />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Button href={html_url}>Profile Link</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserItem;
