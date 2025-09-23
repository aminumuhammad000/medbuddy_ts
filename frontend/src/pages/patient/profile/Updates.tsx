import UpdateAccountInfo from "./components/UpdateAccountInfo";
import UpdateMedicalInfo from "./components/UpdateMedicalInfo";
import UpdatesPersonalInfo from "./components/UpdatesPersonalInfo";
import style from "./Updates.module.css";
import profile from "../../../assets/images/profiles/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import {
  updatePersonalInfo,
  updateMedicalInfo,
  updateAccount,
  clearStatus,
} from "../../../store/slices/authReducer";
import { useState, useEffect } from "react";
import Loading from "../../auth/components/Loading";
import AlertContainer from "../../auth/components/AlertContainer";
import type { RootState, AppDispatch } from "../../../store/store";
import React from "react";

// -------------------- FORM TYPES --------------------
interface ProfileData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  nhis_id: string;
  house_address: string;
}

export interface MedicalData {
  known_allergies: string[];
  chronic_conditions: string[];
  current_medications: string;
  vaccination_record: string;
  blood_type: string;
}


interface AccountData {
  language_preference: string;
  communication_preference: string;
}

// -------------------- COMPONENT --------------------
const Updates: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector((state: RootState) => state.auth);

  const userInformation = useSelector(
    (state: RootState) => state.patientNav.userInformation
  );

  // Clear old success/error messages when component loads
  useEffect(() => {
    dispatch(clearStatus());
  }, [dispatch]);

  // -------------------- STATES --------------------
  const [profileData, setProfileData] = useState<ProfileData>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "male",
    dob: "",
    nhis_id: "",
    house_address: "",
  });

  const [medicalData, setMedicalData] = useState<MedicalData>({
    known_allergies: [],
    current_medications: "",
    vaccination_record: "",
    chronic_conditions: [],
    blood_type: "",
  });

  const [accountData, setAccountData] = useState<AccountData>({
    language_preference: "",
    communication_preference: "",
  });

  // -------------------- LOAD USER PROFILE --------------------
  useEffect(() => {
    if (user) {
      const [firstName, lastName] = user.auth?.name?.split(" ") || ["", ""];
      setProfileData({
        fname: firstName || "",
        lname: lastName || "",
        email: user.auth?.email || "",
        phone: user.auth?.phone || "",
        gender: user.profile?.gender || "male",
        dob: user.profile?.dob || "",
        nhis_id: user.auth?.nhis_id || "",
        house_address: user.profile?.house_address || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setMedicalData({
        known_allergies: user.medical_info?.known_allergies || "",
        current_medications: user.medical_info?.current_medications || "",
        vaccination_record: user.medical_info?.vaccination_record || "",
        chronic_conditions: user.medical_info?.chronic_conditions || "",
        blood_type: user.medical_info?.blood_type || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setAccountData({
        language_preference: user.profile?.language_preference || "",
        communication_preference: user.profile?.communication_preference || "",
      });
    }
  }, [user]);

  // -------------------- HANDLERS --------------------
  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProfileData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
const handleMedicalChange = (
  e:
    | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    | { target: { name: string; value: string | string[] } }
) => {
  if ("target" in e && "value" in e.target) {
    // Case 1: Synthetic event (from input/select)
    const { name, value, options, multiple } = e.target as HTMLSelectElement & {
      options?: HTMLOptionsCollection;
    };

    if (multiple && options) {
      const values = Array.from(options)
        .filter((o) => o.selected)
        .map((o) => o.value);

      setMedicalData((prev) => ({
        ...prev,
        [name]: values,
      }));
    } else {
      setMedicalData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  } else {
    // Case 2: Custom object from handleMultiChange
    const { name, value } = e.target;
    setMedicalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const handleAccountChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAccountData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (userInformation === "basic") {
      const combinedName = `${profileData.fname} ${profileData.lname}`.trim();

      const payload: any = {
        ...profileData,
        name: combinedName,
      };

      if (user?.profile?.profile) {
        payload.profile = user.profile.profile;
      }

      delete payload.fname;
      delete payload.lname;

      dispatch(updatePersonalInfo(payload));
    }

    if (userInformation === "medical") {
      const filteredMedicalData = Object.fromEntries(
        Object.entries(medicalData).filter(([_, v]) =>
          Array.isArray(v) ? v.length > 0 : v !== ""
        )
      );
      dispatch(updateMedicalInfo(filteredMedicalData));
    }

    if (userInformation === "account") {
      const filteredAccountData = Object.fromEntries(
        Object.entries(accountData).filter(([_, v]) => v !== "")
      );
      dispatch(updateAccount(filteredAccountData));
    }
  };

  // -------------------- UI --------------------
  return (
    <div className={style.updates}>
      {loading && <Loading />}
      <AlertContainer />

      {userInformation === "basic" && (
        <div className={style.userProfile}>
          <div className={style.imgCard}>
            <img src={user?.profile?.profile || profile} alt="profile image" />
            <button className={style.changeProfile} id="flexCenter" disabled>
              <Icon icon="solar:camera-linear" id="text30" />
            </button>
          </div>

          <div className={style.btnContainer} id="flexCenter">
            <button className={style.uploadNew} id="mediumText">
              Upload new image
            </button>
            <button id="mediumText" disabled>
              Remove image
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <button type="submit" className={style.Save}>
            Save changes
          </button>
          <br />
          <br />
        </div>

        {userInformation === "basic" ? (
          <UpdatesPersonalInfo
            formData={profileData}
            handleChange={handleProfileChange}
          />
        ) : userInformation === "medical" ? (
          <UpdateMedicalInfo
            formData={medicalData}
            handleChange={handleMedicalChange}
          />
        ) : (
          <UpdateAccountInfo
            formData={accountData}
            handleChange={handleAccountChange}
          />
        )}
      </form>
    </div>
  );
};

export default Updates;
