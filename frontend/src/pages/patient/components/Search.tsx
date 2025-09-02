import type React from "react";
import style from "./Search.module.css";

interface searchInterFace {
  label: string;
}
const Search: React.FC<searchInterFace> = ({ label }) => {
  return (
    <div className={style.searchContainer} id="flexSpaceBetween">
      <div id="flexCenter">
        <iconify-icon
          icon="material-symbols:search"
          className={style.search}
          id="flexCenter"
        />
        <input type="search" name="search" id="search" placeholder={label} />
      </div>
      <iconify-icon
        icon="line-md:filter-filled"
        className={style.filter}
        id="flexCenter"
      ></iconify-icon>
    </div>
  );
};

export default Search;
