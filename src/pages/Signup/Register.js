import styles from "./Register.module.css";
import axios from './../../api/axios';


const handleClick = (e)=>{
  e.preventDefault();

}
const Register = () => {
  return (
    <div className={styles.sigup}>
      <div className={styles.sigupChild} />
      <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
      <div className={styles.signUp}>Sign up</div>
      <div className={styles.startYourFree}>Start your free trial</div>
      <a href="" className={styles.help}>Help</a>
      <a href="" className={styles.privacy}>Privacy</a>
      <a href="" className={styles.terms}>Terms</a>

      <div className={styles.continueWithEmailBtn}>
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

      <div className={styles.continueWithEmailBtn1}>
        <button onClick={handleClick} className={styles.continueWithEmailBtnItem}>Sign up

        </button>
      </div>
      <div className={styles.continueWithEmailBtn2}>
        <div className={styles.googleLogosByHrhasnai12} />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.byProceedingYouAgreeToThWrapper}>
          <div className={styles.byProceedingYou}>
            By proceeding, you agree to the
          </div>
        </div>
        <div className={styles.termsAndConditionsWrapper}>
          <a href="" className={styles.termsAndConditions}>Terms and Conditions</a>
        </div>
        <div className={styles.privacyPolicyWrapper}>
          <a href="" className={styles.termsAndConditions}>Privacy Policy</a>
        </div>
        <div className={styles.and}>and</div>
      </div>
      <div className={styles.alreadyHaveAIntraIdParent}>
        <div className={styles.alreadyHaveA}>Already have a Intra ID ?</div>
        <a href="/login" className={styles.logIn}>Log in</a>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleWrapper}>
          <input type="email" className={styles.inputs} />
        </div>
        <div className={styles.email}>Email</div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleWrapper}>
          <input type="password" className={styles.inputs} />
        </div>
        <div className={styles.email}>Password</div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.groupInner} />
        <div className={styles.lineDiv} />
        <div className={styles.groupChild1} />
        <div className={styles.or}>or</div>
      </div>
    </div>
  );
};

export default Register;
