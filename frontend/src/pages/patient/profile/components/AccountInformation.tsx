import style from "./PersonalInformation.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage,
  setInformation,
} from "../../../../store/slices/patientNavSlice";
import { Icon } from "@iconify/react";
import type { RootState } from "../../../../store/store";
const AccountInformation = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const gotoUpdate = () => {
    dispatch(setPage("updates"));
    dispatch(setInformation("account"));
  };
  return (
    <div className={style.personalInformation}>
      <div className={style.heading} id="flexSpaceBetween">
        <h2>Account & Preference</h2>
        <button
          className={style.editButton}
          onClick={gotoUpdate}
          id="flexCenter"
        >
          Edit{" "}
          <span>
            <Icon icon="iconamoon:edit-light" />
          </span>
        </button>
      </div>

      <div className={style.AccountInformation}>
        <ul className={style.accountDetails}>
          <li className={style.td}>Language Preference</li>
          <li>{user?.profile?.language_preference || "English"}</li>
          <br />
          <li className={style.td}>Communication Preferences</li>
          <li>{user?.profile?.communication_preference || "Email"}</li>
          <br />
          <li className={style.td}>Password</li>
          <li>********</li>
          <br />
          <li>Notification</li>
          <li className={style.td}>
            {user?.notification?.email ||
              "Custom toggles for alerts & reminders"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountInformation;
