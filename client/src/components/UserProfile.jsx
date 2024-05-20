// src/UserProfile.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const UserProfile = ({ user }) => {
  return (
    <Card className="user-profile-card">
      <Card.Img variant="top" src={user.profilePicture} className="profile-picture"/>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {user.email}
        </Card.Text>
        <Card.Text>
          <strong>Phone:</strong> {user.phone}
        </Card.Text>
        <Card.Text>
          <strong>Address:</strong> {user.address}
        </Card.Text>
        <Button variant="primary">Edit Profile</Button>
      </Card.Body>
    </Card>
  );
};

export default UserProfile;
