import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { doLogin } from "../../apis/login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [cred, setCred] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("isLogin", false);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCred({ ...cred, [name]: value });
  };

  const onLogin = async () => {
    const res = await doLogin(cred.email, cred.password);
    if (res?.data) {
      localStorage.setItem("profile", JSON.stringify(res?.data?.data));
      localStorage.setItem("isLogin", true);
      navigate("/home");
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={onLogin}>
      <div className={styles.formItem}>
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div className={styles.formItem}>
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button type="button" style={{ marginTop: "10px" }} onClick={onLogin}>
        Masuk
      </button>
    </form>
  );
};

export default LoginForm;
