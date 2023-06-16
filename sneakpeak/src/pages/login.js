import "./login.css";
import { useEffect } from "react";
import { handleGoogleSignIn } from "../firebase/auth";
import { useAuth } from "../firebase/authProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/profile");
    }
  }, [currentUser]);

  const login = async () => {
    try {
      const result = await handleGoogleSignIn();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!currentUser && (
        <img
          src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
          className="loginButton"
          onClick={login}
        ></img>
      )}
    </div>
  );
}

export default Login;
