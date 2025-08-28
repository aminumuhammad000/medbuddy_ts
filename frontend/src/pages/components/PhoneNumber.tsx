// import React, { useState } from "react";
import style from "./PhoneInput.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumber: React.FC = () => {
  // const [phone, setPhone] = useState("");

  return (
    <div className={style.phoneContainer} id="flexColumn ">
      <label htmlFor="phone" className={style.label}>
        Phone Number
      </label>

      <div className={style.inputGroup}>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          // value={phone}
          // onChange={(e) => setPhone(e.target.value)}
          className={style.input}
          name="phone"
        />

        <PhoneInput
          country={"ng"} // default Nigeria
          // value={phone}
          // onChange={(phone) => setPhone(phone)}
          inputClass={style.phoneInput}
          buttonClass={style.flagDropdown}
          // disableDropdown={true}
        />
      </div>
    </div>
  );
};

export default PhoneNumber;
