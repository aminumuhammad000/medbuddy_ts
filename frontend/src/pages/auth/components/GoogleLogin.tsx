import { useSelector } from "react-redux";
import style from "../Auth.module.css";
import google from "../../../assets/icons/social/google.png";
import facebook from "../../../assets/icons/social/facebook.png";
import type { RootState } from "../../../store/store";

const GoogleLogin = () => {
  const { authMode } = useSelector((state: RootState) => state.auth);
  
  return (
    <>
      {(authMode === "login" || authMode === "register") && (
        <div className={style.loginWith} id="flexCenter">
          <button onClick={() => console.log("Google login clicked")}>
            <img src={google} alt="google icon" className={style.Google} />
          </button>
          <button onClick={() => console.log("Facebook login clicked")}>
            <img
              src={facebook}
              alt="facebook icon"
              className={style.Facebook}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default GoogleLogin;
