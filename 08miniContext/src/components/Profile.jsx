import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return (
    <>
      <p>Welcome {user.username}</p>
      <p>Your Password is {user.password}</p>
    </>
  );
}

export default Profile;
