import React from "react";
// import style from "./PhoneInput.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const PhoneNumber: React.FC = () => {
  const [phone, setPhone] = useState("+234");

  return (
    <div id="flexColumn">
      <PhoneInput
        country={"ng"} // default country → shows 🇺🇸 + +1
        value={phone}
        onChange={(value) => setPhone(value)}
        // enableSearch={true} // allows searching countries
        // inputStyle={{ width: "100%" }}
        inputStyle={{
          width: "100%",
          height: "60px",
          borderRadius: "20px",
          backgroundColor: "#edededcc",
          opacity: "0.6",
          padding: "20px 40px",
        }}
        // buttonStyle={{
        //   borderRadius: "12px 0 0 12px",
        //   backgroundColor: "#f5f5f5",
        // }}
        // containerStyle={{
        //   margin: "10px 0",
        // }}
      />
      <label htmlFor="email" id="mediumText">
        Email
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter your Email address"
        required
        id="mediumText"
      />
    </div>
  );
};
export default PhoneNumber;
