import "./header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/authProvider";

function Header() {
  const { currentUser } = useAuth();
  const [photoURL, setPhotoURL] = useState("https://i.imgur.com/hktdFD6.png");

  useEffect(() => {
    if (currentUser) {
      if (currentUser.photoURL) {
        setPhotoURL(currentUser.photoURL);
      }
    }
  }, [currentUser]);

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" className="logoTitle">
          SneakPeak
        </Link>
        <Link to="/sneakers" className="headerLink">
          All Sneakers
        </Link>
        <Link to="/offers" className="headerLink">
          Offers
        </Link>
      </div>
      <div className="headerRight">
        {currentUser ? (
          <Link className="profilePicture" to="/profile">
            <img
              className="profilePicture"
              referrerPolicy="no-referrer"
              src={photoURL}
            />
          </Link>
        ) : (
          <Link to="/login" className="headerLink">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
