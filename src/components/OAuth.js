import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  const onGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      //If user doesnt exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google Account");
    }
  };

  return (
    <div className="social">
      <span className="social-text">
        {location.pathname === "/signup" ? "Sign Up with:" : "Log In with:"}
      </span>

      <img
        src="https://img.icons8.com/cute-clipart/64/000000/google-logo.png"
        alt="Google icon"
        className="social-icon"
        onClick={onGoogleClick}
      />
    </div>
  );
};

export default OAuth;
