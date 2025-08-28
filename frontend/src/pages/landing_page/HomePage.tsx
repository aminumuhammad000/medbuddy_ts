import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { googleOnetab } from "../../store/slices/authReducer";
import type { RootState, AppDispatch } from "../../store/store";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const usertype: string =
    useSelector((state: RootState) => state.auth.user?.usertype) || "patient";

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse: CredentialResponse) => {
      console.log("Google credentialResponse:", credentialResponse);
      if (!credentialResponse.credential) return;

      dispatch(
        googleOnetab({
          credential: credentialResponse.credential,
          usertype,
        })
      )
        .unwrap()
        .then((res) => {
          console.log("Google login response:", res);
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
        .catch((err) => {
          console.error("Google login error", err);
        });
    },
    onError: () => {
      console.log("Google login failed");
    },
    // auto_select: true,
  });

  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
