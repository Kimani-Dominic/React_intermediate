
import React from 'react';
import UserProfile from './UserProfile';

function UserDashboard() {
  const user = { name: 'John Doe', email: 'john@example.com' };

  return (
    <div>
      <h2>User Dashboard</h2>
      <UserProfile />
    </div>
  );
}

export default UserDashboard;