import type { RootState } from "../../../../store/store";
import style from "./UpdatesPersonalInfo.module.css";
import { useSelector } from "react-redux";
import React from "react";
import Loading from "../../../components/Loading";

interface FormData {
  fname?: string;
  lname?: string;
  email?: string;
  phone?: string;
  dob?: string;
  gender?: string;
  nhis_id?: string;
  house_address?: string;
  image?: string;
}

interface UpdatesPersonalInfoProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const UpdatesPersonalInfo: React.FC<UpdatesPersonalInfoProps> = ({
  formData = {},
  handleChange,
}) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  // const { userInformation } = useSelector(
  //   (state: RootState) => state.patientNav
  // );

  return (
    <div className={style.UpdatesPersonalInfo} id="flexColumn">
      {loading && <Loading />}
      <h2 className={style.title}>Personal Information</h2>
      <>
        <div className={style.fullName}>
          <div>
            <label htmlFor="fname" id="mediumText">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              value={formData.fname ?? ""}
              onChange={handleChange}
              placeholder={user?.auth?.name?.split(" ")[0] ?? ""}
            />
          </div>
          <div>
            <label htmlFor="lname" id="mediumText">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              value={formData.lname ?? ""}
              onChange={handleChange}
              placeholder={user?.auth?.name?.split(" ")[1] ?? ""}
            />
          </div>
        </div>

        <input type="hidden" name="image" value={user?.profile?.image || ""} />

        <div className={style.Email}>
          <div>
            <label htmlFor="email" id="mediumText">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={user?.auth?.email ?? ""}
              value={formData.email ?? ""}
              onChange={handleChange}
              disabled
            />
          </div>
          <div>
            <label htmlFor="phone" id="mediumText">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder={user?.auth?.phone || "Enter your phone number"}
              value={formData.phone ?? ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.OtherDetails}>
          <div>
            <label htmlFor="dob" id="mediumText">
              Date Of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob ?? ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gender" id="mediumText">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              value={formData.gender ?? ""}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="nhis_id" id="mediumText">
              NHIS ID
            </label>
            <input
              type="text"
              name="nhis_id"
              id="nhis_id"
              placeholder={user?.auth?.nhis_id || "NHIS ID"}
              value={formData.nhis_id ?? ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={style.UpdateAddress}>
          <label htmlFor="house_address" id="mediumText">
            House Address
          </label>
          <input
            type="text"
            name="house_address"
            id="house_address"
            placeholder={user?.profile?.house_address || "House Address"}
            value={formData.house_address ?? ""}
            onChange={handleChange}
          />
        </div>
      </>
    </div>
  );
};

export default UpdatesPersonalInfo;
