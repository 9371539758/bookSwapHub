import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GoogleLoginSuccess.module.scss";


import bgVideo from "../assets/login-bg.mp4";



const GoogleLoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className={styles.success}>
  
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>


      <div className={styles.card}>
        <div className={styles.icon}>✓</div>

        <h1>Welcome!</h1>

        <p>
          You have successfully signed in with
          <span> Google</span>.
        </p>

        <div className={styles.loader}></div>

        <small>Redirecting to Home...</small>
      </div>
    </section>
  );
};

export default GoogleLoginSuccess;