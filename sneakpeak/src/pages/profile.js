import { useState, useEffect } from "react";
import "./profile.css";
import { useAuth } from "../firebase/authProvider";
import { handleSignOut } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [displayName, setDisplayName] = useState("Test Account");
  const [photoURL, setPhotoURL] = useState("https://i.imgur.com/hktdFD6.png");

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    } else {
      if (currentUser.displayName) {
        setDisplayName(currentUser.displayName);
      }
      if (currentUser.photoURL) {
        setPhotoURL(currentUser.photoURL);
      }
    }
  }, [currentUser]);

  if (!currentUser) {
    return null;
  }

  return (
    <div className="container">
      <img src={photoURL} className="profile-picture" />
      <h2 className="username">{displayName}</h2>
      <a onClick={handleSignOut} className="logout-link">
        Log out
      </a>
    </div>
  );
}

export default Profile;
