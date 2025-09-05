import style from "./UpdatesPersonalInfo.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Icon } from "@iconify/react";
import type { RootState } from "../../../../store/store";

interface UpdateAccountInfoProps {
  formData?: {
    language_preference?: string;
    communication_preference?: string;
  };
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
}

const UpdateAccountInfo: React.FC<UpdateAccountInfoProps> = ({
  formData = {},
  handleChange,
}) => {
  const { user } = useSelector((state: RootState) => state.auth);

  // Determine the default values from backend if formData is empty
  const languagePref =
    formData.language_preference ||
    user?.profile?.language_preference ||
    "english";

  const communicationPref =
    formData.communication_preference ||
    user?.profile?.communication_preference ||
    "email";

  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow((prev) => !prev);
  };

  const icon = show ? "solar:eye-outline" : "quill:eye-closed";
  const passwordType = show ? "text" : "password";

  return (
    <div className={style.UpdatesPersonalInfo} id="flexColumn">
      <h1>Account & Preference</h1>

      <div className={style.fullName}>
        <div>
          <label htmlFor="language_preference" id="mediumText">
            Language Preference
          </label>
          <select
            name="language_preference"
            id="language_preference"
            value={languagePref}
            onChange={handleChange}
          >
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
            <option value="hausa">Hausa</option>
            <option value="yoruba">Yoruba</option>
          </select>
        </div>

        <div>
          <label htmlFor="communication_preference" id="mediumText">
            Communication Preference
          </label>
          <select
            name="communication_preference"
            id="communication_preference"
            value={communicationPref}
            onChange={handleChange}
          >
            <option value="email">Email/ Push notification</option>
            <option value="sms">SMS</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="phone">Phone Call</option>
          </select>
        </div>
      </div>

      <br />

      <div style={{ width: "50%" }}>
        <div className={style.UpdatePassword} id="flexColumn">
          <label htmlFor="password" id="mediumText">
            Password
          </label>
          <div className={style.passwordContainer}>
            <input
              type={passwordType}
              name="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$"
              title="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
              placeholder="password"
              className={style.pass}
              value="********"
              disabled
            />
            <Icon
              icon={icon}
              onClick={togglePasswordVisibility}
              className={style.PassIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccountInfo;
