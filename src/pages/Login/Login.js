import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.continueWithEmailBtn}>
        <div className={styles.googleLogosByHrhasnai1} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
        <div className={styles.logIn}>Log in</div>
        <div className={styles.continueToIntra}>Continue to Intra</div>
        <a href="" className={styles.help}>Help</a>
        <a href="" className={styles.privacy}>Privacy</a>
        <a href="" className={styles.terms}>Terms</a>
        <div className={styles.continueWithEmailBtn1}>
        <button className={styles.googlebutton} >
        <div className={styles.continueWithGoogleParent}>
          <div className={styles.continueWithGoogle}>Continue with Google</div>
          <img
            className={styles.googleLogosByHrhasnai1}
            alt=""
            src="/google-logos-by-hrhasnai-1@2x.png"
          />
        </div>
        </button>
        </div>

        <div className={styles.continueWithEmailBtn2}>
          <button className={styles.continueWithEmailBtnItem} >
          <div className={styles.logInParent}>
            <div className={styles.logIn1}>Log in</div>
          </div>
          </button>
        </div>
        
        <div className={styles.groupParent}>
          <div className={styles.rectangleWrapper}>
          <input type="email" className={styles.inputs} />
          </div>
          <div className={styles.email}>Email</div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleWrapper}>
          <input type="password" className={styles.inputs} />
          </div>
          <div className={styles.email}>Password</div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
          <div className={styles.or}>or</div>
        </div>
        <div className={styles.newToIntraParent}>
          <div className={styles.newToIntra}>New to Intra?</div>
          <a href="/signup" className={styles.getStarted}>Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
