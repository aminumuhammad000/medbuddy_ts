import type React from "react";
import style from "./Search.module.css";
import { Icon } from "@iconify/react";
interface searchInterFace {
  label: string;
}
const Search: React.FC<searchInterFace> = ({ label }) => {
  return (
    <div className={style.searchContainer} id="flexSpaceBetween">
      <div id="flexCenter">
        <Icon
          icon="material-symbols:search"
          className={style.search}
          id="flexCenter"
        />
        <input type="search" name="search" id="search" placeholder={label} />
      </div>
      <Icon
        icon="line-md:filter-filled"
        className={style.filter}
        id="flexCenter"
      ></Icon>
    </div>
  );
};

export default Search;
