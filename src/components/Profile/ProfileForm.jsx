import classes from "./ProfileForm.module.css";

import { useContext, useState } from "react";

import authContext from "../../context/authContext";

import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { token } = useContext(authContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAXmI1MuvSeNwcSdahEZY4e6l97BdaiBhk",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    navigate("/");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
