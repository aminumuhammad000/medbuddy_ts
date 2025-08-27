import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthMode, clearStatus } from "../../store/slices/authReducer";
import AlertBox from "./AlertBox";
import type { RootState, AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const AlertContainer: React.FC = () => {
  const { authMode, error, success } = useSelector(
    (state: RootState) => state.auth
  );
  const [otpResent, setOtpResent] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const shouldRedirect = useRef(false);

  useEffect(() => {
    if (success && authMode === "otp" && !otpResent) {
      dispatch(clearStatus());
      dispatch(setAuthMode("setPassword"));
    }
    if (otpResent) {
      setOtpResent(false);
    }
  }, [success, authMode, dispatch, otpResent]);

  return (
    <>
      {error && (
        <AlertBox
          icon={"material-symbols:error"}
          color="red"
          message={error}
          buttonClick={() => dispatch(clearStatus())}
        />
      )}

      {success && (
        <AlertBox
          icon="icon-park-solid:success"
          color="#1771b7"
          message={success}
          buttonClick={() => dispatch(clearStatus())}
        />
      )}
      {success && authMode === "register" && (
        <AlertBox
          icon={"icon-park-solid:success"}
          color="#1771b7"
          message={success}
          buttonClick={() => {
            dispatch(clearStatus());
            dispatch(setAuthMode("login"));
            navigate("/auth");
            shouldRedirect.current = false;
          }}
        />
      )}
      {success && authMode === "login" && (
        <AlertBox
          icon={"icon-park-solid:success"}
          color="#1771b7"
          message={success}
          buttonClick={() => dispatch(clearStatus())}
        />
      )}

      {otpResent && (
        <AlertBox
          icon={"icon-park-solid:success"}
          color="#1771b7"
          message="OTP resent successfully!"
          buttonClick={() => setOtpResent(false)}
        />
      )}
    </>
  );
};

export default AlertContainer;
