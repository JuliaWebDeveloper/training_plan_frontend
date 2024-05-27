import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';

const Profile = () => {
  
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h6>{user.name}</h6>
      </div>
    )
  );
};

export default Profile;