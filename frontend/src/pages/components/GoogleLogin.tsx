import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import style from "../Auth.module.css";
import google from "../../assets/icons/social/google.png";
import facebook from "../../assets/icons/social/facebook.png";
import { googleLogin } from "../../store/slices/authReducer";
import type { RootState, AppDispatch } from "../../store/store";

const GoogleLogin: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const usertype =
    useSelector((state: RootState) => state.auth.user?.usertype) || "patient";

  const login = useGoogleLogin({
    flow: "auth-code", // 🔑 Request authorization code instead of token

    onSuccess: async (response) => {
      console.log("Google Auth Code:", response.code);

      // Send auth code to backend
      dispatch(
        googleLogin({
          code: response.code, // 🔑 send the code, not access_token
          usertype,
        })
      )
        .unwrap()
        .then((res: any) => {
          if (!res.exists) {
            navigate("/auth");
          } else {
            switch (res.user.usertype) {
              case "patient":
                navigate("/patient/dashboard");
                break;
              case "doctor":
                navigate("/doctors/dashboard");
                break;
              case "pharmacist":
                navigate("/pharmacist/dashboard");
                break;
              case "admin":
                navigate("/admin/dashboard");
                break;
              default:
                navigate("/");
            }
          }
        })
        .catch((err: any) => {
          console.error("Google login error", err);
        });
    },

    onError: () => {
      console.log("Google login failed");
    },
  });

  const { authMode } = useSelector((state: RootState) => state.auth);

  return (
    <>
      {(authMode === "login" || authMode === "register") && (
        <div className={style.loginWith} id="flexCenter">
          <button onClick={() => login()}>
            <img src={google} alt="google icon" className={style.Google} />
          </button>
          <div>
            <img
              src={facebook}
              alt="facebook icon"
              className={style.Facebook}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleLogin;
