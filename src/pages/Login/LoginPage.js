import React from "react";
import styles from "./Login.module.css";
import MainLayouts from "../../Layouts/MainLayouts";
import LoginForm from "../../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <MainLayouts>
      <div className={styles.container}>
        <div className={styles.heroContainer}>pict</div>
        <div className={styles.formContainer}>
          <div>top section</div>
          <LoginForm />
        </div>
      </div>
    </MainLayouts>
  );
};

export default LoginPage;
