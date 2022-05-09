import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

import OAuth from "./OAuth";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <section className="section-login">
      <div className="container">
        <div className="login">
          <div className="login-text-box">
            <h2 className="heading-secondary">Create Your Account</h2>

            <form className="login-form" onSubmit={submitHandler}>
              <div>
                <input
                  id="name"
                  type="name"
                  placeholder="Your name"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  onChange={changeHandler}
                />
              </div>
              <div>
                <input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  onChange={changeHandler}
                />
              </div>
              <button className="btn btn--form">Creat Account</button>
            </form>
          </div>
          <OAuth />

          <Link to="/login" className="login-text">
            Already Have An Account?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
