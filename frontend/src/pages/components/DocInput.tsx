import React from "react";
import style from "../Auth.module.css";
import { Icon } from "@iconify/react";

interface DocInputProps {
  label: string;
  type: string;
  placeholder: string;
}

const DocInput: React.FC<DocInputProps> = ({ label, type, placeholder }) => {
  return (
    <div className={style.nhis} id="flexColumn">
      <label htmlFor="nhis" id="mediumText">
        {label}
      </label>
      <div className={style.DocInput}>
        <label className={style.docLabel} id="flexCenter">
          <Icon icon="material-symbols:upload" className={style.uploadIcon} />
          <span id="mediumText">{placeholder}</span>
          <input type={type} name="nhis" id="nhis" hidden />
        </label>
      </div>
    </div>
  );
};

export default DocInput;
