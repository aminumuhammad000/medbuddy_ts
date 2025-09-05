import React, { useState } from "react";
import style from "./PasswordInput.module.css";
import { Icon } from "@iconify/react";
interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  name?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label = "Password",
  placeholder = "Enter a password",
  name = "password",
}) => {
  const [show, setShow] = useState(false);

  const togglePasswordVisibility = () => {
    setShow((prev) => !prev);
  };

  const icon = show ? "solar:eye-outline" : "quill:eye-closed";
  const passwordType = show ? "text" : "password";

  return (
    <div className={style.UpdatePassword} id="flexColumn">
      <label htmlFor={name} id="mediumText">
        {label}
      </label>
      <div className={style.passwordContainer}>
        <input
          type={passwordType}
          name={name}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
          title="Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
          placeholder={placeholder}
          className={style.pass}
        />
        <Icon
          icon={icon}
          onClick={togglePasswordVisibility}
          className={style.PassIcon}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
