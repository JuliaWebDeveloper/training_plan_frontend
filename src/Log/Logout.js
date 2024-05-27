import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';

const Logout = () => {
    
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <button className="log" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Выйти
    </button>)
  );
};

export default Logout;